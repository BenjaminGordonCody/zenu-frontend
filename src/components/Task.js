import { useState } from "react";

export const Task = ({
  task,
  index,
  dailyTaskRecord,
  updateDailyTaskRecord,
  taskTag,
}) => {
  const [taskCompletion, setTaskCompletion] = useState(false);
  return (
    <div className="task" key={index}>
      <div
        className={"bigEmoji" + taskCompletion}
        onClick={() => {
          setTaskCompletion(!taskCompletion); //component's state, for styling
          updateDailyTaskRecord(taskTag, taskCompletion);
        }}
      >
        {task.emoji}
      </div>
      <div className="taskDescription">{task.string}</div>
    </div>
  );
};
