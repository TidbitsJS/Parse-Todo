import React from "react";

import "./createCard.css";

const CreateCard = (props) => {
  const toggleClick = () => {
    props.showCreateTodo(true);
  };

  return (
    <div className="todo-createCard-container">
      <div className="todo-createCard-btn" onClick={toggleClick}>
        + New
      </div>
    </div>
  );
};

export default CreateCard;
