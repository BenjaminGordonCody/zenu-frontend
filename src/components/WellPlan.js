import { useEffect, useState } from "react";
import React from "react";
import { fetchRequestUpdateTaskTally } from "../utils";
const taskDescriptions = require("../allTasks/index");

export const WellnessPlan = ({ setPage, user, stylesheet, setUser }) => {
  //set up states
  const tempTaskObject = {};
  Object.keys(taskDescriptions).map((key) => {
    tempTaskObject[key] = false;
  });

  const [clicked, setClicked] = useState(tempTaskObject);

  //utils
  const updateClicked = (key, value) => {
    const temp = { ...clicked };
    temp[key] = value;
    setClicked(temp);
  };

  const newTaskRecordForDatabase = () => {
    let newTaskRecord = JSON.parse(user.taskTally);
    Object.keys(clicked).forEach((task) => {
      console.log(task);
      if (clicked[task]) {
        newTaskRecord[task] = 0;
      }
    });
    console.log("new Task Record: ", newTaskRecord);
    fetchRequestUpdateTaskTally(user.username, newTaskRecord, setUser);
  };

  return (
    <div style={stylesheet.page}>
      <div>
        <h1 className="ideas">Wellbeing Ideas</h1>
        {Object.keys(taskDescriptions).map((task, index) => {
          return (
            <button
              className={"b1" + clicked[task]}
              key={index}
              onClick={() => updateClicked(task, !clicked[task])}
            >
              {taskDescriptions[task]["string"]}
            </button>
          );
        })}
      </div>
      <button onClick={newTaskRecordForDatabase}>Add tasks to Dashboard</button>
    </div>
  );
};
