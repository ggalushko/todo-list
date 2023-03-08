import { useState } from "react";

const Task = ({ task, handleDelete, handleToggle, handleEdit }) => {
  const [inEditMode, setInEditMode] = useState(false);
  return (
    <li
      className={
        task.isDone ? "task-list__task task-list__task_done" : "task-list__task"
      }
    >
      <input
        className="task-list__checkbox"
        type="checkbox"
        onChange={() => {
          handleToggle(task);
          setInEditMode(false);
        }}
      ></input>
      {inEditMode ? (
        <textarea
          onChange={(e) => {
            handleEdit(task, e.target.value);
          }}
          className={"task-list__edit-textarea"}
          value={task.text}
        ></textarea>
      ) : (
        <p
          className={
            task.isDone
              ? "task-list__text task-list__text_done"
              : "task-list__text"
          }
        >
          {task.text}
        </p>
      )}
      <button
        type="button"
        className="task-list_edit-btn"
        onClick={() => setInEditMode(!inEditMode)}
      ></button>
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
