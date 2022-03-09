const taskDescriptions = require("../allTasks");
export const Tally = ({ user }) => {
  return (
    <div id="">
      <h2>Achievements!</h2>
      {Object.keys(JSON.parse(user.taskTally)).map((key, index) => {
        return (
          <div className="individualTally">
            {taskDescriptions[key]["emoji"]}
            {JSON.parse(user.taskTally)[key]}
          </div>
        );
      })}
    </div>
  );
};
