import React from "react";
import logo from "assets/icons/tasks.svg";
import user from "assets/images/user.svg";

import "./header.css";

const Header = () => {
  return (
    <div className="todo-header-container">
      <div className="todo-header-container-title">
        <div className="todo-header-container-title-text">
          <img src={logo} alt="task_logo" />
          <h1>Daily Task</h1>
        </div>
        <div className="todo-header-container-title-user">
          <img src={user} alt="user" />
        </div>
      </div>
      <div className="todo-header-container-info">
        <p>
          Click <span>+ New</span> To create new list and wait for project
          manager card.
          <br />
        </p>
        <p>Don't create a card by yourself to manage a good collaboration.</p>
      </div>
    </div>
  );
};

export default Header;
