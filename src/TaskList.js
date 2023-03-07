import { useContext } from "react";
import Task from "./Task";
import Context from "./Context";

const TaskList = ({ handleDelete, handleToggle, searchInput }) => {
  const tasks = useContext(Context);
  const searchedTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  return searchedTasks.length > 0 ? (
    <ul className="task-list">
      {searchedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  ) : (
    <p className="task-list__not-found"> Nothing found 😔 </p> 
  );
};

export default TaskList;
