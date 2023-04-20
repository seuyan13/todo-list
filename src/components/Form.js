import React from "react";

export default function Form({ handleSubmit, setValue, value }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const btn_enter = {
    flex: "1",
    margin: "0.5rem",
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Here"
        value={value}
        onChange={handleChange}
      />

      <button className="btn" type="submit" style={btn_enter}>
        Enter
      </button>
    </form>
  );
}
