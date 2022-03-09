import React from 'react';
import taskDescriptions from '../allTasks/index';
import { useEffect, useState } from 'react';


export const WellnessPlan = () => {
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
        <section>
            <div>
                <h1>Wellbeing Ideas</h1>
                <p className="list">
                {Object.keys(taskDescriptions).map((task, index) => {
                    
        return <button key={index} onClick={()=>handleClick(taskDescriptions[task]["string"])}> {taskDescriptions[task]["string"]} </button>;
      
        
      
      })}
                </p>
            </div>
            <div className="picked">
                
                    <h2>Activities</h2>
                    <p>
                    
                   
                    
                    
                </p>
            </div>
        </section>
    );

}
