const taskDescriptions = require("../allTasks");

export const Dashboard = ({ user, setPage }) => {
  return (
    <div id="dashboard" className="page">
      {Object.keys(taskDescriptions).map((task) => {
        console.log(taskDescriptions[task]);
      })}
    </div>
  );
};
