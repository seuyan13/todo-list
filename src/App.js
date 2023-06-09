import React, { useState } from "react";
import Paging from "./components/Paging";
import List from "./components/List";
import Form from "./components/Form";
import ButtonGroup from "./components/ButtonGroup";
import "./App.css";

export default function App() {
  <link href="/dist/output.css" rel="stylesheet"></link>;
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectAll, setSelectAll] = useState(false);

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
    setValue("");
  };

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
        <ButtonGroup
          setTodoData={setTodoData}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
        />
        <List
          todoData={todoData}
          setTodoData={setTodoData}
          currentPage={currentPage}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
        />
        <Paging
          todoData={todoData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
