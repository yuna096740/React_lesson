import React from "react";

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello, World!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
        何をしますか?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        追加する
      </button>
    </form>
  );
}

export default Form;