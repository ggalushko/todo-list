import { useContext } from "react";
import Task from "./Task";
import Context from "./Context";

const TaskList = ({ handleDelete, handleToggle, searchInput }) => {
  const tasks = useContext(Context);
  const searchedTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (tasks.length === 0)
    return (
      <p className="task-list__not-found">
        You don't any tasks <br></br>Click the plus button below to add one
      </p>
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
