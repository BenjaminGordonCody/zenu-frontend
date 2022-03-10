
import { useEffect, useState } from 'react';
import React from "react";
const taskDescriptions = require("../allTasks/index");


export const WellnessPlan = ({setPage, user, stylesheet}) => {
    const tempTaskObject = { }
    Object.keys(taskDescriptions).map(
     (key) => {
         tempTaskObject[key] = false
     }
    )
     console.log(tempTaskObject)

    const [clicked, setClicked] = useState(tempTaskObject)
    
    const updateClicked = (key, value) => {
        const temp = { ...clicked };
        temp[key] = value;
        console.log(temp)
        setClicked(temp);
      };
    
    return(
        
            <div style={stylesheet.page}>
              
                <h1 className="ideas">Wellbeing Ideas</h1>
                {Object.keys(taskDescriptions).map((task, index) => {
                   
        return <button className="b1" key={index} onClick={()=>updateClicked(task, !clicked[task])}> {taskDescriptions[task]["string"]} </button>;
      
        
      
      })}
               
    </div>
    
    
    );


}