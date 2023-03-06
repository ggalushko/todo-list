import { useState } from "react";

const AddTask = ({ addTaskHandler }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className="add-task">
      <input
        type="text"
        className="add-task__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          inputValue && addTaskHandler(inputValue);
          setInputValue("")
        }}
        type="submit"
        className="add-task__btn"
      ></button>
    </form>
  );
};

export default AddTask;
