import { useEffect, useReducer, useState } from "react";
import { initialTasks } from "./initialTasks.js";
import AddTask from "./components/AddTask.js";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import TaskList from "./components/TaskList.js";
import tasksReducer from "./tasksReducer.js";
import Context from "./Context.js";
import TasksAmount from "./components/TasksAmount.js";

const App = () => {
  const [newTaskId, setNewTaskId] = useState(4);
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    JSON.parse(localStorage.getItem("tasks")) || initialTasks
  );
  const [searchInput, setSearchInput] = useState("");
  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );
  return (
    <>
      <Header />
      <main className="content">
        <Context.Provider value={tasks}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <TasksAmount />
          <TaskList
            handleEdit={editTask}
            handleDelete={deleteTask}
            handleToggle={toggleTask}
            searchInput={searchInput}
          />
          <AddTask addTaskHandler={addTask} />
        </Context.Provider>
      </main>
    </>
  );

  function deleteTask(task) {
    dispatch({ type: "delete", id: task.id });
  }

  function addTask(text) {
    dispatch({ type: "add", id: newTaskId, text: text });
    setNewTaskId(newTaskId + 1);
  }

  function toggleTask(task) {
    dispatch({ type: "toggle", id: task.id });
  }

  function editTask(task, text) {
    dispatch({ type: "edit", id: task.id, text: text });
  }
};

export default App;
