import { useState } from "react";
import { fetchRequestUpdateTaskTally } from "../utils";
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
  const [totalTaskRecord, setTotalTaskRecord] = useState(
    JSON.parse(user.taskTally)
  );

  //update utils
  const updateDailyTaskRecord = (key, value) => {
    const temp = { ...dailyTaskRecord };
    temp[key] = value;
    setDailyTaskRecord(temp);
  };

  const newTaskRecordForDatabase = () => {
    let newTaskRecord = { ...totalTaskRecord };
    Object.keys(dailyTaskRecord).forEach((task) => {
      if (dailyTaskRecord[task] && newTaskRecord.hasOwnProperty(task)) {
        newTaskRecord[task] += 1;
      } else if (dailyTaskRecord[task]) {
        newTaskRecord[task] = 1;
      }
    });
    fetchRequestUpdateTaskTally(user.username, newTaskRecord);
  };

  return (
    <div id="dashboard" className="page">
      <div id="dashboardTaskContainer">
        <button id="submitDailyTasks" onClick={newTaskRecordForDatabase}>
          submit
        </button>
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
      <div id="dashboardTallyContainer"></div>
    </div>
  );
};
