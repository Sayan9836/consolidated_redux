import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../features/todo/newtodoSlice";

const SecondTodo = () => {
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(undefined);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      if (isUpdate) {
        console.log("called1");
        dispatch(updateTodo({ text: text, id: isUpdate }));
        setIsUpdate(undefined);
      } else {
        dispatch(addTodo(text));
      }

      setText("");
    }
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handleUpdate = (todo) => {
    setIsUpdate(todo.id);
    setText(todo.text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">sumit</button>
      </form>
      <div>
        {todos?.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <span onClick={() => handleDelete(todo)}>delete</span>
              <span onClick={() => handleUpdate(todo)}>update</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondTodo;
