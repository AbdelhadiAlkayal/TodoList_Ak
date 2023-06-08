import React, { useState } from "react";
import style from "./FormTask.module.css";
import ErrorModel from "../UI/ErrorModal";

function FormTask(props) {
  const [taskValue, setTaskValue] = useState("");
  const [error, setError] = useState();
  const taskChangeHandler = (event) => {
    setTaskValue(event.target.value);
  };
  const onAddHandler = (event) => {
    event.preventDefault();
    // use trim() due to if user enter space
    if (taskValue.trim().length === 0) {
      setError({
        title: "Please enter your task",
        message: "You can't add empty task",
      });
      return;
    }
    props.onAddTask(taskValue);
    setTaskValue("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <form>
        <button className={style.addButton} onClick={onAddHandler}>
          +
        </button>
        <input
          className={style.input}
          type="text"
          onChange={taskChangeHandler}
          placeholder="Your next task .."
          value={taskValue}
        />
      </form>
    </div>
  );
}
export default FormTask;
