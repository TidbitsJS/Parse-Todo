import Card from "components/Card/Card";
import React from "react";

import "./todo.css";

const Todo = () => {
  return (
    <div className="todo-body-container">
      <h2>Todo List</h2>
      <div className="todo-body-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Todo;
