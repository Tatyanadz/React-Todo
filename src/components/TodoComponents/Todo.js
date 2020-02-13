import React from 'react';

const Task = props => {
    console.log(props);

    return (
        <div 
          className={`task${props.task.completed ? " completed" : ""}`}
          onClick={() => props.toggleTask(props.task.id)}
        >
            <p>{props.task.todo}</p>
        </div>
    )
};

export default Task;