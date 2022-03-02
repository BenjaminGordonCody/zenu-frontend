import React from 'react';
const taskDescriptions = require()


export const WellnessPlan = () => {
    const basket =() => {
alert("Added to your plan!")
    }

    return(
        <section>
            <div>
                <h1>Wellbeing Ideas</h1>
                <p classname="list">
                {Object.keys(taskDescriptions).map((task, index) => {
        return <button onClick = {basket}> {taskDescriptions[task]["string"]} </button>;
      })}

                </p>
            </div>
        </section>
    );
}

