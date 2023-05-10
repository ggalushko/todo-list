import { useState } from "react";

export const Task = ({ task, handleDelete, handleToggle, handleEdit }) => {
  const [inEditMode, setInEditMode] = useState(false);
  const taskClass = task.isDone ? "task task_done" : "task";
  const taskTextClass = task.isDone
    ? "task__text task__text_done"
    : "task__text";
  const editBtnClass = task.isDone
    ? "task__edit-btn task__edit-btn_hidden"
    : "task__edit-btn";

  return (
    <li className={taskClass}>
      <input
        className="task__checkbox"
        type="checkbox"
        onChange={() => {
          handleToggle(task);
          setInEditMode(false);
        }}
        checked={task.isDone}
      />
      {inEditMode ? (
        <textarea
          onChange={(e) => {
            handleEdit(task, e.target.value);
          }}
          className={"task__edit-textarea"}
          value={task.text}
        />
      ) : (
        <p className={taskTextClass}>{task.text}</p>
      )}
      <button
        type="button"
        className={
          inEditMode ? "task__edit-btn task__edit-btn_edit-mode" : editBtnClass
        }
        onClick={() => setInEditMode(!inEditMode)}
      />
      <button
        type="reset"
        className="task__delete-btn"
        onClick={() => {
          handleDelete(task);
        }}
      />
    </li>
  );
};
