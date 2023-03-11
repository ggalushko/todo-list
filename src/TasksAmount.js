import { useContext } from "react";
import Context from "./Context";

const TasksAmount = () => {
  const tasksContext = useContext(Context);
  const totalTasksNumber = tasksContext.length;
  const completeTasksNumber = tasksContext.filter((task) => task.isDone).length;
  return (
    <p class="tasks-amount">
      {completeTasksNumber} out of {totalTasksNumber}
    </p>
  );
};

export default TasksAmount;
