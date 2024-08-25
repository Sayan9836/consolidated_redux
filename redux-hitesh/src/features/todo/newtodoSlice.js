import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const newTodoSlice = createSlice({
  name: "myTodoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, id: nanoid() });
    },

    deleteTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      console.log("update=>", action);
      const idx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      console.log(idx);

      if (idx !== -1) {
        state.todos[idx].text = action.payload.text;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = newTodoSlice.actions;

export default newTodoSlice.reducer;
