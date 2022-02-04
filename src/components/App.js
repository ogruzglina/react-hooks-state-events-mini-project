import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [ tasks, setTasks ] = useState(TASKS);
  const [ category, setCategory] = useState('All');

  function handleDeleteTask (deletedTaskText) {
    setTasks(tasks.filter( task => task.text !== deletedTaskText ));
  }

  const filteredTaskList = tasks.filter( task => category === 'All' ? task : task.category === category );

  function handleAddNewTask (newTask) {
    console.log('new', newTask);
    setTasks([
      ...tasks,
      newTask
    ]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = { CATEGORIES } 
        selectedCategory = { category } 
        onSelectCategory = { setCategory }
      />
      <NewTaskForm categories = { CATEGORIES } onTaskFormSubmit = { handleAddNewTask }/>
      <TaskList tasks = { filteredTaskList } handleDeleteTask = { handleDeleteTask }/>
    </div>
  );
}

export default App;
