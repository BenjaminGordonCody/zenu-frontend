import React from "react";
const taskDescriptions = require("../allTasks/index");

export const WellnessPlan = ({ setPage, user, stylesheet }) => {
  const handleClick = (e) => {
    //alert("Added to your plan!")
    console.log(e.key.value);
  };

  return (
    <section>
      <div style={stylesheet.page}>
        <h1>Wellbeing Ideas</h1>
        <p classname="list">
          {Object.keys(taskDescriptions).map((task, index) => {
            return (
              <button onClick={handleClick}>
                {" "}
                {taskDescriptions[task]["string"]}{" "}
              </button>
            );
          })}
        </p>
      </div>
      {/* <div className="picked">
                <h2>Activities</h2>
                <p>
                    {Object.keys(taskDescriptions)}
                </p>
            </div> */}
    </section>
  );
};
