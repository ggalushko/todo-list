import { useState } from "react";

const Task = ({ task, handleDelete, handleToggle, handleEdit }) => {
  const [inEditMode, setInEditMode] = useState(false);
  const taskClass = task.isDone
    ? "task-list__task task-list__task_done"
    : "task-list__task";
  const taskTextClass = task.isDone
    ? "task-list__text task-list__text_done"
    : "task-list__text";
  const editBtnClass = task.isDone
  ? "task-list__edit-btn task-list__edit-btn_hidden"
  : "task-list__edit-btn"

  return (
    <li className={taskClass}>
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
        <p className={taskTextClass}>{task.text}</p>
      )}
      <button
        type="button"
        className={
          inEditMode? "task-list__edit-btn task-list__edit-btn_edit-mode" : editBtnClass
        }
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
