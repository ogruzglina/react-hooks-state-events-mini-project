import React from "react";

function Task({ text, category, handleDeleteTask }) {

  return (
    <div className="task">
      <div className="text" value = { text }>{ text }</div>
      <div className="label" value = { category }>{ category }</div>
      <button className="delete" onClick = { () => handleDeleteTask(text) }>X</button>
    </div>
  );
}

export default Task;
