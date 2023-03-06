const Task = ({ task }) => {
  return (
    <li className="task-list__task">
      <input className="task-list__checkbox" type="checkbox"></input>
      <p className="task-list__text">{task.text}</p>
      <button type="reset" className="task-list__delete-btn"></button>
    </li>
  );
};

export default Task;
