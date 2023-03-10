import { useReducer, useState } from "react";
import AddTask from "./AddTask.js";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import TaskList from "./TaskList.js";
import tasksReducer from "./tasksReducer.js";
import Context from "./Context.js";

const App = () => {
  const [newTaskId, setNewTaskId] = useState(4);
  const [tasks, dispatch] = useReducer(tasksReducer, [
    {
      id: 0,
      text: "Go to the gym",
      isDone: false,
    },
    { id: 1, text: "Play the videogames", isDone: false },
    { id: 2, text: "Walk the dog", isDone: false },
    {
      id: 3,
      text: "Do the chemistry project",
      isDone: false,
    },
  ]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header />
      <main className="content">
        <Context.Provider value={tasks}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
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
