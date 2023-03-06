const Task = ({ task, handleDelete, handleToggle }) => {
  return (
    <li
      className={
        task.isDone ? "task-list__task task-list__task_done" : "task-list__task"
      }
    >
      <input
        className="task-list__checkbox"
        type="checkbox"
        onChange={() => handleToggle(task)}
      ></input>
      <p
        className={
          task.isDone
            ? "task-list__text task-list__text_done"
            : "task-list__text"
        }
      >
        {task.text}
      </p>
      <button
        type="reset"
        className="task-list__delete-btn"
        onClick={() => {
          handleDelete(task);
        }}
      ></button>
    </li>
  );
};

export default Task;
