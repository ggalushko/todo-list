import { useEffect, useReducer, useState } from "react";
import { initialTasks } from "../data/initialTasks.js";
import {
  AddTask,
  Header,
  SearchBar,
  TaskList,
  TasksAmount,
} from "../components";

import tasksReducer from "../utils/tasksReducer.js";
import Context from "../utils/Context.js";

const App = () => {
  const [newTaskId, setNewTaskId] = useState(
    Number(localStorage.getItem("newTaskId")) || 0
  );
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    JSON.parse(localStorage.getItem("tasks")) || initialTasks
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    localStorage.setItem("newTaskId", newTaskId + 1);
    setNewTaskId(Number(localStorage.getItem("newTaskId")));
  }

  function toggleTask(task) {
    dispatch({ type: "toggle", id: task.id });
  }

  function editTask(task, text) {
    dispatch({ type: "edit", id: task.id, text: text });
  }
};

export default App;
