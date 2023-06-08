import { useState } from "react";
import "./App.css";
import ErrorModel from "./components/UI/ErrorModal";
import FormTask from "./components/FormTask/FormTask";
import Task from "./components/Task/Task";

function App() {
  const [stateTask, setStateTask] = useState([]);
  const [error, setError] = useState();
  // function to add task
  const addTaskHandler = (nameTask) => {
    // I use some function to check if the task is already exist or not
    if (stateTask.some((task) => task.name === nameTask)) {
      setError({
        title: "This task are already exist",
        message: "You Can't add same name of task",
      });
      return;
    }

    let tempArray = [...stateTask];
    tempArray.push({
      name: nameTask,
      completed: false,
      id: Date.now(), // use date.now to generate a unique id
    });
    setStateTask(tempArray);
  };
  //function to delete one task
  const deleteTaskHandler = (id) => {
    let temp = [...stateTask];
    // use findIndex function to find the same id indx
    const updatedTasks = temp.findIndex((task) => {
      return task.id === id;
    });
    // and delete it for using splice function
    temp.splice(updatedTasks, 1);
    setStateTask(temp);
  };
  // function to check task completed or not
  const checkTaskHandler = (id) => {
    const newTodo = stateTask.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setStateTask(newTodo);
  };
  const errorHandler = () => {
    setError(null);
  };
  //function to delete all tasks at once
  const deleteAllTasks = () => {
    setStateTask([]);
  };
  return (
    <main>
      <h1>Todo List </h1>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <FormTask onAddTask={addTaskHandler} />
      <button className="button" onClick={deleteAllTasks}>
        Delete all tasks
      </button>
      <Task
        tasks={stateTask}
        onDeleteTask={deleteTaskHandler}
        onCheck={checkTaskHandler}
      />
    </main>
  );
}

export default App;
