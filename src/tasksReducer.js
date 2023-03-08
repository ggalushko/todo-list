export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "add": {
      return [...tasks, { id: action.id, text: action.text, isDone: false }];
    }
    case "toggle": {
      return tasks.map((task) =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task
      );
    }
    case "edit": {
      return tasks.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    }
    default:
      {throw new Error("Wrong argument for type of dispatch")}
  }
}
