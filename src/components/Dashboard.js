import { useState } from "react";
import { Task } from "./Task";

const taskDescriptions = require("../allTasks");

const blankDailyTaskRecord = () => {
  let tempObj = {};
  Object.keys(taskDescriptions).forEach((task) => {
    tempObj[task] = false;
  });
  return tempObj;
};
export const Dashboard = ({ user, setPage }) => {
  //states
  const [dailyTaskRecord, setDailyTaskRecord] = useState(
    blankDailyTaskRecord()
  );

  //update util
  const updateDailyTaskRecord = (key, value) => {
    const temp = { ...dailyTaskRecord };
    temp[key] = value;
    setDailyTaskRecord(temp);
  };

  return (
    <div id="dashboard" className="page">
      {Object.keys(taskDescriptions).map((task, index) => {
        return (
          <Task
            task={taskDescriptions[task]}
            taskTag={task}
            index={index}
            dailyTaskRecord={dailyTaskRecord}
            updateDailyTaskRecord={updateDailyTaskRecord}
          />
        );
      })}
    </div>
  );
};
