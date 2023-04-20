import React from "react";

export default function List({ todoData, setTodoData }) {
  const btn_X = {
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
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.finished)} key={data.id}>
          <input
            type="checkbox"
            onChange={() => handleFinished(data.id)}
            defaultChecked={false}
          />
          {data.title}
          <button style={btn_X} onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
