import React from "react";

export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          編集する <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          削除する <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}