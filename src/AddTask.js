import { useState } from "react";

const AddTask = ({ addTaskHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsHidden, setInputIsHidden] = useState(false)

  return (
    <form
      className="add-task"
      onSubmit={(e) => {
        e.preventDefault();
        inputValue && addTaskHandler(inputValue);
        setInputValue("");
        setInputIsHidden(!inputIsHidden)
      }}
    >
      <input
        type="text"
        className={inputIsHidden? "add-task__input visible" : "add-task__input"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="submit" className="add-task__btn"></button>
    </form>
  );
};

export default AddTask;
