import React from "react";
import Task from './Task';

function TaskList({ tasks, handleDeleteTask }) {
  const task = tasks.map(task => 
    <Task key = {task.text} {...task} handleDeleteTask = {handleDeleteTask}/>
  );

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
