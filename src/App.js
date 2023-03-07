import { useReducer, useState } from "react";
import AddTask from "./AddTask.js";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import TaskList from "./TaskList.js";
import tasksReducer from "./tasksReducer.js";
import Context from "./Context.js";

const App = () => {
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

  const [newTaskId, setNewTaskId] = useState(4);
  const [tasks, dispatch] = useReducer(tasksReducer, [
    {
      id: 0,
      text: "Go to the gym Go to the gym Go to the gyGo to the gymGo to the gymGo to the gymGo to the gymm GGo to the gymo to the gym Go to the gymGo to the gymGo to the gymGo to the gymGo to the gymGo to the gym",
      isDone: false,
    },
    { id: 1, text: "Play the videogames", isDone: false },
    { id: 2, text: "Walk the dog", isDone: false },
    {
      id: 3,
      text: "Read the book by Hunter Stockton Thompson about the American Dream",
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
            handleDelete={deleteTask}
            handleToggle={toggleTask}
            searchInput={searchInput}
          />
          <AddTask addTaskHandler={addTask} />
        </Context.Provider>
      </main>
    </>
  );
};

export default App;
