import { useContext } from "react";
import { Task } from "./Task";
import Context from "../utils/Context.js";

export const TaskList = ({
  handleDelete,
  handleToggle,
  searchInput,
  handleEdit,
}) => {
  const tasks = useContext(Context);
  const searchedTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (tasks.length === 0)
    return (
      <p className="task-list__message">
        You don't have any tasks <br />
        Click the plus button below to add one
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
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  ) : (
    <p className="task-list__message"> Nothing found 😔 </p>
  );
};
