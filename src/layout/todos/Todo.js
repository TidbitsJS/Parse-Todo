import React from "react";
import Card from "components/Card/Card";
import CreateCard from "components/CreateCard/CreateCard";

import "./todo.css";

const dummyTodos = [
  {
    title: "Code It",
    type: "In Progress",
    priority: "High",
    subTitle: "Code at least an hour everyday",
    day: 12,
    month: "March",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
  {
    title: "React",
    type: "Done",
    priority: "Low",
    subTitle: "Create React notes project",
    day: 7,
    month: "September",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.",
  },
  {
    title: "Node",
    type: "To Do",
    priority: "Medium",
    subTitle: "Create NASA Node Project",
    day: 21,
    month: "Novmber",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
  {
    title: "Academind",
    type: "To Do",
    priority: "Low",
    subTitle: "Complete placere project",
    day: 5,
    month: "June",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
  {
    title: "Zero To Mastery",
    type: "In Progress",
    priority: "Medium",
    subTitle: "Learn advance javaScript",
    day: 12,
    month: "February",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
  {
    title: "Web Development",
    type: "In Progress",
    priority: "High",
    subTitle: "Complete Angela Yu Web development bootcamp",
    day: 12,
    month: "July",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project. Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
  {
    title: "GSSOC'21",
    type: "Done",
    priority: "High",
    subTitle: "Finish GSSOC'21 event",
    day: 12,
    month: "May",
    year: 2021,
    description:
      "Create and code a fancy card for the todo project. Make sure to add different kinds of priorites, dates, and buttons. Plus make it look elegant and more attractive.Create and code a fancy card for the todo project.",
  },
];

const Todo = () => {
  return (
    <div className="todo-body-container">
      <h2 className="todo-bdy-container-headText">Todo List</h2>
      <div className="todo-body-container-Wrapper">
        <CreateCard />
        <div className="todo-body-card-container">
          {dummyTodos.map((todo) => (
            <Card
              title={todo.title}
              key={todo.title + todo.type + todo.day}
              type={todo.type}
              priority={todo.priority}
              subTitle={todo.subTitle}
              day={todo.day}
              month={todo.month}
              year={todo.year}
              description={todo.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
