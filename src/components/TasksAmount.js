import { useContext } from "react";
import Context from "../utils/Context.js";

const TasksAmount = () => {
  const tasksContext = useContext(Context);
  const totalTasksNumber = tasksContext.length;
  const completeTasksNumber = tasksContext.filter((task) => task.isDone).length;
  const lineDone = new Array(completeTasksNumber).fill();
  const lineNotDone = new Array(totalTasksNumber - completeTasksNumber).fill();
  const progressLineStyle = {
    gridTemplateColumns: `repeat(${totalTasksNumber}, 1fr)`,
  };
  let nextId = 0;

  if (totalTasksNumber) {
    return (
      <>
        <p className="tasks-amount">
          {completeTasksNumber} out of {totalTasksNumber}
        </p>

        <div className="line-container" style={progressLineStyle}>
          {lineDone.map(() => (
            <div key={nextId++} className="progress-line_done"></div>
          ))}
          {lineNotDone.map(() => (
            <div key={nextId++} className="progress-line_not-done"></div>
          ))}
        </div>
      </>
    );
  }
};

export default TasksAmount;
