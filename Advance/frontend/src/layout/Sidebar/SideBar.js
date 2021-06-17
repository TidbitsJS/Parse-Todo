import React, { useState } from "react";
import CreateTodo from "components/CreateTodo/CreateTodo";

const SideBar = (props) => {
  const [toggleState, setToggleState] = useState(true);
  const showSidebar = () => {
    setToggleState(!toggleState);
    props.showCreateTodo(false);
  };

  return (
    <div
      className={
        "todo-sliding-sidebar " + (toggleState ? "slide-in" : "slide-out")
      }
    >
      <div className="todo-sliding-sidebar-cancel">
        <button onClick={showSidebar}>Cancel</button>
      </div>
      <CreateTodo />
    </div>
  );
};

export default SideBar;
