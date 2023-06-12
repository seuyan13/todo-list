import React, { useState, useEffect } from "react";
import Paging from "./components/Paging";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  <link href="/dist/output.css" rel="stylesheet"></link>;
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const [currentTodos, setCurrentTodos] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const todosPerPage = 10;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setFormSubmitted(true);
      return;
    }

    setFormSubmitted(false);
    let newTodo = {
      id: Date.now(),
      title: value,
      finished: false,
    };

    setTodoData((prev) => [newTodo, ...prev]);

    if ((todoData.length + 1) % todosPerPage === 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    setValue("");
  };

  useEffect(() => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todoData.slice(indexOfFirstTodo, indexOfLastTodo);
    setCurrentTodos(currentTodos);
  }, [todoData, currentPage]);

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1 className="title" style={{ textAlign: "center" }}>
            Todo List
          </h1>
        </div>

        <Form
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          formSubmitted={formSubmitted}
        />
        <List todoData={currentTodos} setTodoData={setTodoData} />
        <Paging
          todoData={todoData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
