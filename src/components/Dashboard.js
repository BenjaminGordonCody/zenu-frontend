//styles
import "../styles/dashboard.css";

//components
import { useState } from "react";
import { fetchRequestUpdateTaskTally } from "../utils";
import { Task } from "./Task";
import { Tally } from "./TaskTally";
const taskDescriptions = require("../allTasks");

//utils
const blankDailyTasksRecord = () => {
  let tempObj = {};
  Object.keys(taskDescriptions).forEach((task) => {
    tempObj[task] = false;
  });
  return tempObj;
};

export const Dashboard = ({ user, setPage, setUser, stylesheet }) => {
  console.log("in props", user.taskTally);
  console.log("jsonparse", JSON.parse(user.taskTally));
  let totalTaskRecord = JSON.parse(user.taskTally);

  //states
  const [dailyTaskRecord, setDailyTaskRecord] = useState(
    blankDailyTasksRecord()
  );

  console.log("ttr", totalTaskRecord);

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
      } else {
      }
    });
    fetchRequestUpdateTaskTally(user.username, newTaskRecord, setUser);
  };

  return (
    <div id="dashboard" style={stylesheet.page}>
      <div id="dashboardTaskContainer">
        <div id="dashboardTaskButtons">
          <button id="submitDailyTasks" onClick={newTaskRecordForDatabase}>
            submit
          </button>
          {Object.keys(totalTaskRecord).map((task, index) => {
            return (
              <Task
                task={taskDescriptions[task]}
                taskTag={task}
                index={index}
                dailyTaskRecord={dailyTaskRecord}
                updateDailyTaskRecord={updateDailyTaskRecord}
                stylesheet={stylesheet}
              />
            );
          })}
        </div>
      </div>
      <div id="dashboardTallyContainer">
        <Tally user={user} />
      </div>
    </div>
  );
};
