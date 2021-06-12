import React from "react";

import "./card.css";

const Card = () => {
  return (
    <div className="todo-card-container">
      <div className="todo-card-container-header-date">
        <div className="todo-card-container-header-date-text">
          <p>
            <span>12</span>th March, 2021
          </p>
        </div>
        <div className="todo-card-container-header-todo">
          <div className="todo-card-container-header-todoType">
            <p>In Progress</p>
          </div>
        </div>
      </div>
      <div className="todo-card-container-header-task">
        <div className="todo-card-container-header-task-headText">
          <h2>Code It</h2>
        </div>
        <div className="todo-card-container-header-task-subText">
          <p>Code at least an hour everyday</p>
        </div>
      </div>
      <div className="todo-card-container-bodyDesc">
        <div className="todo-card-container-priority">
          <p>High Priority</p>
        </div>
        <div className="todo-card-container-description">
          <p>
            Create and code a fancy card for the todo project. Make sure to add
            different kinds of priorites, dates, and buttons. Plus make it look
            elegant and more attractive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
