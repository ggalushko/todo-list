import { useContext } from "react";
import Task from "./Task";
import Context from "./Context";

const TaskList = ({ handleDelete, handleToggle }) => {
  const tasks = useContext(Context);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TaskList;
