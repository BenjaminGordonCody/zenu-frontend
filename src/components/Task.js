import { useState } from "react";

export const Task = ({ task, index, updateDailyTaskRecord, taskTag }) => {
  const [taskCompletion, setTaskCompletion] = useState(false);

  return (
    <div className="task" key={index}>
      <button
        className={"taskButton-" + taskCompletion}
        onClick={() => {
          console.log("taskCompletion before", taskCompletion);
          const newVal = taskCompletion ? false : true;
          console.log("newval", newVal);
          setTaskCompletion(newVal); //component's state, for styling
          console.log("taskCompletion after", taskCompletion);
          updateDailyTaskRecord(taskTag, newVal);
        }}
      >
        {task.emoji}
      </button>
      <div className="taskDescription">{task.string}</div>
    </div>
  );
};
