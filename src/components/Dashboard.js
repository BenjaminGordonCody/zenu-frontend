import { useState } from "react";
import { fetchRequestUpdateTaskTally } from "../utils";
import { Task } from "./Task";
import { Tally } from "./TaskTally";
const taskDescriptions = require("../allTasks");

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
    console.log("updateDailyTaskRecord recieves", key, value);
    const temp = { ...dailyTaskRecord };
    console.log("temp obj", temp);
    temp[key] = value;
    console.log("updated temp obj", temp);
    setDailyTaskRecord(temp);
  };

  const newTaskRecordForDatabase = () => {
    let newTaskRecord = { ...totalTaskRecord };
    console.log("totalTaskRecord", totalTaskRecord);
    Object.keys(dailyTaskRecord).forEach((task) => {
      if (dailyTaskRecord[task] && newTaskRecord.hasOwnProperty(task)) {
        newTaskRecord[task] += 1;
      } else if (dailyTaskRecord[task]) {
        newTaskRecord[task] = 1;
      } else {
      }
    });
    console.log("totalTaskRecord", totalTaskRecord);
    console.log("sent to FetchRequest", newTaskRecord);
    fetchRequestUpdateTaskTally(user.username, newTaskRecord, setUser);
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
      <div id="dashboardTallyContainer">
        <Tally user={user} />
      </div>
    </div>
  );
};
