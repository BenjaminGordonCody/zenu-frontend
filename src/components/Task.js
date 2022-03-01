import { useState } from "react";

export const Task = ({ task, index }) => {
  const [taskCompletion, setTaskCompletion] = useState(false);
  return (
    <div className="task" key={index}>
      <div
        className={"bigEmoji" + taskCompletion}
        onClick={() => {
          setTaskCompletion(!taskCompletion);
        }}
      >
        {task.emoji}
      </div>
      <div className="taskDescription">{task.string}</div>
    </div>
  );
};
