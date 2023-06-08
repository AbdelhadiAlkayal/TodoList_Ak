import React from "react";
import style from "./Task.module.css";

function Task(props) {
  return (
    <div>
      {props.tasks.map(({ id, name, completed }) => (
        <div className={style.tasks} key={id}>
          <input
            className={style.check}
            type="checkbox"
            onClick={() => props.onCheck(id)}
          />
          <span className={completed ? style.complete : ""}> {name}</span>
          <button
            onClick={() => props.onDeleteTask(id)}
            className={style.removeButton}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}
export default Task;
