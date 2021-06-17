import React from "react";
import todoColors from "utils/colors";

import "./card.css";

const Card = (props) => {
  let typeBg = todoColors.todoBackground;
  let priorityBg = todoColors.lowPriorityBg;
  let priorityText = todoColors.lowPriorityText;

  const { title, type, priority, subTitle, day, month, year, description } =
    props;

  if (type === "Done") {
    typeBg = todoColors.doneBackground;
  } else if (type === "In Progress") {
    typeBg = todoColors.progressBackground;
  }

  if (priority === "High") {
    priorityBg = todoColors.highPriorityBg;
    priorityText = todoColors.highPriorityText;
  } else if (priority === "Medium") {
    priorityBg = todoColors.mediumPriorityBg;
    priorityText = todoColors.mediumPriorityText;
  }

  return (
    <div className="todo-card-container" style={{ borderTopColor: typeBg }}>
      <div className="todo-card-container-header-date">
        <div className="todo-card-container-header-date-text">
          <p>
            <span>{day}</span>th {month}, {year}
          </p>
        </div>
        <div className="todo-card-container-header-todo">
          <div
            className="todo-card-container-header-todoType"
            style={{ background: typeBg }}
          >
            <p>{type}</p>
          </div>
        </div>
      </div>
      <div className="todo-card-container-header-task">
        <div className="todo-card-container-header-task-headText">
          <h2>{title}</h2>
        </div>
        <div className="todo-card-container-header-task-subText">
          <p>{subTitle}</p>
        </div>
      </div>
      <div className="todo-card-container-bodyDesc">
        <div className="todo-card-container-priority">
          <p style={{ color: priorityText, background: priorityBg }}>
            {priority} Priority
          </p>
        </div>
        <div className="todo-card-container-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
