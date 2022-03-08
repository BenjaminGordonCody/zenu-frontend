const taskDescriptions = require("../allTasks");
export const Tally = ({ user }) => {
  console.log(JSON.parse(user.taskTally), taskDescriptions);
  return (
    <div>
      <h2>Achievements!</h2>
      {Object.keys(JSON.parse(user.taskTally)).map((key, index) => {
        console.log(JSON.parse(user.taskTally)[key], key);
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
