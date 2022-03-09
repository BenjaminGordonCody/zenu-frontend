import { useState } from "react";

export const Task = ({ task, index, updateDailyTaskRecord, taskTag }) => {
  const [taskCompletion, setTaskCompletion] = useState(false);

  return (
    <div className="dashboardTask" key={index}>
      <button
        className={"dashboardTaskButton status" + taskCompletion}
        onClick={() => {
          const newVal = taskCompletion ? false : true;
          setTaskCompletion(newVal); //component's state, for styling
          updateDailyTaskRecord(taskTag, newVal);
        }}
      >
        {task.emoji}
      </button>
      <div className="taskDescription">{task.string}</div>
    </div>
  );
};
