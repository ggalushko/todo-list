import { useContext } from "react";
import Context from "../Context";

const TasksAmount = () => {
  const tasksContext = useContext(Context);
  const totalTasksNumber = tasksContext.length;
  const completeTasksNumber = tasksContext.filter((task) => task.isDone).length;

  if (totalTasksNumber) {
    return (
      <p className="tasks-amount">
        {completeTasksNumber} out of {totalTasksNumber}
      </p>
    );
  }
};

export default TasksAmount;
