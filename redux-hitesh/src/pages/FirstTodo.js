import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTode, updateTodo } from "../features/todo/todoSlice";

const FirstTodo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTode({ id }));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ text, id }));
  };

  return (
    <div className="App">
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>

      {todos?.map((todo) => {
        return (
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <span>{todo.text} </span> {"   "}
            <span onClick={() => handleDelete(todo.id)}>delete</span>
            <span onClick={() => handleUpdate(todo.id)}>Update</span>
          </div>
        );
      })}
    </div>
  );
};

export default FirstTodo;
