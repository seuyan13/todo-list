import React from "react";

export default function Form({ handleSubmit, setValue, value, formSubmitted }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const btn_enter = {
    flex: "1",
    margin: "0.5rem",
    padding: "0.3rem 0.5rem",
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      {formSubmitted ? (
        <input
          type="text"
          name="value"
          style={{
            flex: "10",
            padding: "5px",
          }}
          placeholder="Please enter the list"
          value={value}
          onChange={handleChange}
          id="placeholderError"
        />
      ) : (
        <input
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Enter Here"
          value={value}
          onChange={handleChange}
        />
      )}
      <style>{` #placeholderError::placeholder { color: red;} `}</style>
      <button className="btn" type="submit" style={btn_enter}>
        Enter
      </button>
    </form>
  );
}
