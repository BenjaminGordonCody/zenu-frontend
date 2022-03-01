import { Task } from "./Task";

const taskDescriptions = require("../allTasks");

export const Dashboard = ({ user, setPage }) => {
  return (
    <div id="dashboard" className="page">
      {Object.keys(taskDescriptions).map((task, index) => {
        return <Task task={taskDescriptions[task]} index={index} />;
      })}
    </div>
  );
};
