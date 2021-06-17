import React from "react";

import trash from "../../assets/images/trash.svg";
import CheckBox from "./CheckBox";

export default function TodoItem(props) {
  const { data, changeStatus, deleteItem } = props;

  const handleChange = (checked) => changeStatus(data.id, checked);
  const className =
    "todo-item ui-state-default " +
    (data.completed === true ? "completed" : "pending");

  const deleteTodo = (todoId) => {
    console.log("Deleted ", todoId);
    deleteItem(todoId);
  };

  return (
    <li className={className}>
      <div className="checkbox">
        <label>
          <CheckBox checked={data.completed} onChange={handleChange} />{" "}
          {data.text}
        </label>
      </div>
      <div className="delete-todo">
        <img
          src={trash}
          alt="trash_icon"
          title="delete"
          onClick={() => deleteTodo(data.id)}
        />
      </div>
    </li>
  );
}
