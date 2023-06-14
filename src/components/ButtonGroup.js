import React from "react";

export default function ButtonGroup({ setTodoData, selectAll, setSelectAll }) {
  const getStyle = (selected) => ({
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: selected ? "line-through" : "none",
  });

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
  };

  const handleDeleteAll = () => {
    setTodoData([]);
  };

  return (
    <div style={{ margin: "1rem 0rem" }}>
      <input
        type="checkbox"
        onChange={handleSelectAll}
        checked={selectAll}
        style={{ float: "left", ...getStyle(selectAll) }}
      />
      <label style={{ fontSize: "0.7rem" }}>Select All</label>
      <button
        className="btn"
        onClick={handleDeleteAll}
        style={{ float: "right" }}
      >
        Delete All
      </button>
    </div>
  );
}
