import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  user: null,
  loading: false,
  error: null,
};

export const logInUser = createAsyncThunk(
  "Todo/login",
  async (userData, { signal, rejectWithValue }) => {
    let res = await fetch("url", {
      method: "",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
      signal: signal,
    });

    if (!res.ok) {
      const message = res.text();
      return rejectWithValue({ error: message });
    }

    res = await res.json();
    return res;
  },
);

export const registerUser = createAsyncThunk(
  "Todo/register",
  async (userData, thunkAPI) => {
    const res = await axios.post(
      "url",
      { ...userData },
      { headers: { "Content-Type": "application/json" } },
    );

    return res.data;
  },
);

export const createTodo = createAsyncThunk(
  "Todo/create",
  async (todo, token) => {
    const res = await axios.post(
      "url",
      {
        ...todo,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
);

export const deleteTodo = createAsyncThunk(
  "Todo/delete",
  async ({ id, token }, thunkAPI) => {
    await axios.delete(`/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  },
);

export const updateTode = createAsyncThunk(
  "Todo/update",
  async ({ id, text }, thunkAPI) => {
    const res = await axios.put(`/${id}`, {
      text: text,
    });
    return res.data;
  },
);

export const getTodo = createAsyncThunk("Todo/get", async () => {
  const res = await axios.get("url");

  return res.data;
});

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },

    deleteTode: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );

      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload.text;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logInUser.rejected, (state, action) => {});
    builder.addCase(logInUser.fulfilled, (state, action) => {});
    builder.addCase(registerUser.pending, (state, action) => {});
    builder.addMatcher(registerUser.settled, () => {});
  },
});

export const { addTodo, deleteTode, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
