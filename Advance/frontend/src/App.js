import Header from "components/Header/Header";
import Todo from "layout/todos/Todo";
import "./App.css";

function App() {
  return (
    <div className="todo-app">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
