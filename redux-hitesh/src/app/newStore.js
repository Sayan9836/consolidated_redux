import { configureStore } from "@reduxjs/toolkit";
import newTodoReducer from "../features/todo/newtodoSlice";
export const store = configureStore({
  reducer: newTodoReducer,
});
