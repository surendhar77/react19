import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";




const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());


 

  const handleFormSubmit = (inputValue) => {
    //   event.preventDefault();
    const {id,content,checked} = inputValue;
    //to check if the input field is empty or not

    if (!content) {
      return;
    }
    // to check if the data is already existing or not
    // if (task.includes(inputValue)) {
    //   //   setInputValue(" ");
    //   return;
    // }
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if(ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask,{id:id,content:content,checked:checked}]);
    //   setInputValue("");
  };

  // todo Date and Time
  // const getDateTime = () => {
  //   const now = new Date();
  //   const formattedDate = now.toLocaleDateString();
  //   const formattedTime = now.toLocaleTimeString();
  // };

 // todo add data to localStorage

 setLocalStorageTodoData(task)


 
 
 
  //todo handleDeleteTodo

  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);

    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  // todo handleClearTodoData functionality

  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handlecheckedTodo Functionality
   const handleCheckedTodo = (content) => {
   const updatedTask = task.map((curTask) => {
    if(curTask.content === content )
    {
      return { ...curTask,checked : !curTask.checked } ; 
    }
    else
    {
      return curTask;
    }
   });
   setTask(updatedTask);
   };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
       <TodoDate />
      </header>
      {/* <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event)=> handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task </button>
          </div>
        </form>
      </section> */}
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnordList">
        <ul>
          {task.map((curTask) => {
            return (
             <TodoList  
             key ={curTask.id} 
             data ={curTask.content} 
             checked = {curTask.checked}
             onHandleDeleteTodo ={handleDeleteTodo} 
             onHandleCheckedTodo = {handleCheckedTodo}
             />
            );
          })}
        </ul>
      </section>
      <button className="clear-btn" onClick={handleClearTodoData}>
        Clear all
      </button>
    </section>
  );
};

export default Todo;
