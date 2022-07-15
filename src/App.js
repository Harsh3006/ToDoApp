import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import UpdateTaskForm from "./components/UpdateTaskForm";
import ToDo from "./components/ToDo";
import items from "./items.json";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(items.Items);
  const [updateTask, setUpdateTask] = useState("");
  const [countComplete, setCountComplete] = useState(0);

  // Add Task
  const addTaskHandler = () => {
    if (newTask) {
      let num = todos.length + 1;
      let newEntry = { id: num, title: newTask, completed: false };
      setTodos([...todos, newEntry]);
      setNewTask("");
    }
  };

  // Delete Task
  const deleteTaskHandler = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
    todos.map((item) => {
      if (item.id === id) {
        if (item.completed) {
          setCountComplete(countComplete - 1);
        }
      }
      return item;
    });
  };

  // Mark as done
  const markDoneHandler = (id) => {
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          if (!task.completed) {
            setCountComplete(countComplete + 1);
          } else {
            setCountComplete(countComplete - 1);
          }
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  // Cancel Update
  const cancelUpdateHandler = () => {
    setUpdateTask("");
  };

  // Change Task for Upadte
  const changeTaskHandler = (event) => {
    setUpdateTask({
      id: updateTask.id,
      title: event.target.value,
      completed: updateTask.completed ? true : false,
    });
  };

  // Upadte Task
  const updateTaskHandler = () => {
    setTodos((oldData) => {
      return [
        ...oldData.filter((task) => task.id !== updateTask.id),
        updateTask,
      ];
    });
    setUpdateTask("");
  };

  window.onload = () => {
    countCompleteHandler();
  };

  const countCompleteHandler = () => {
    let count = 0;
    todos.map((item) => {
      if (item.completed) {
        count += 1;
      }
      return item;
    });
    setCountComplete(count);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Things To Do</h2>
        {todos && todos.length ? (
          <h2>Done: {countComplete}</h2>
        ) : (
          <p className="text-center">Looks Like you're almost free today!</p>
        )}

        {updateTask && updateTask ? (
          <UpdateTaskForm
            updateTask={updateTask}
            changeTaskHandler={changeTaskHandler}
            updateTaskHandler={updateTaskHandler}
            cancelUpdateHandler={cancelUpdateHandler}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTaskHandler={addTaskHandler}
          />
        )}

        <ToDo
          todos={todos}
          markDoneHandler={markDoneHandler}
          setUpdateTask={setUpdateTask}
          deleteTaskHandler={deleteTaskHandler}
        />
      </div>
    </>
  );
}

export default App;
