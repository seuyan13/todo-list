import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (finished) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: finished ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      finished: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleFinished = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.finished = !data.finished;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1 className="title" style={{ textAlign: "center" }}>
            Todo List
          </h1>
        </div>
        {todoData.map((data) => (
          <div style={getStyle(data.finished)} key={data.id}>
            <input
              type="checkbox"
              onChange={() => handleFinished(data.id)}
              defaultChecked={false}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </div>
        ))}

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Here"
            value={value}
            onChange={handleChange}
          />

          <button className="btn" type="submit" style={{ flext: "1" }}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
