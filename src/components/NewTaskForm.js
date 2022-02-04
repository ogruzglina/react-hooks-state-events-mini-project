import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [ formData, setFormData ] = useState({
    text: '',
    category: '',
  });

  const options = categories.map( category => 
    category === 'All' ? null : 
      <option key = { category } >{ category }</option>
  );
console.log(options);
  function handleChangeCategory (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitNewTask (e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit = { handleSubmitNewTask }>
      <label>
        Details
        <input type="text" name="text" value = { formData.text } onChange={ handleChangeCategory }/>
      </label>
      <label>
        Category
        <select name="category" value = { formData.category } onChange={ handleChangeCategory }>
          { options }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
