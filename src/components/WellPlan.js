
import { useEffect, useState } from 'react';
import React from "react";
const taskDescriptions = require("../allTasks/index");

export const WellnessPlan = ({ setPage, user, stylesheet }) => {
  const handleClick = (e) => {
    //alert("Added to your plan!")
    console.log(e.key.value);
  };

export const WellnessPlan = ({stylesheet}) => {
    const tempTaskObject = { }
    Object.keys(taskDescriptions).map(
     (key) => {
         tempTaskObject[key] = false
     }
    )
     console.log(tempTaskObject)

    const [clicked, setClicked] = useState(false)
    
    const handleClick = (task) => {
        //alert("Added to your plan!")
        console.log(task)
        }
    
    return(
        
            <div style={stylesheet.page}>
                <h1>Wellbeing Ideas</h1>
                {Object.keys(taskDescriptions).map((task, index) => {
                    
        return <button key={index} onClick={()=>handleClick(taskDescriptions[task]["string"])}> {taskDescriptions[task]["string"]} </button>;
      
        
      
      })}
               
    </div>
    );


}}