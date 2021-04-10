import React from 'react'
import {useState} from 'react'
import './ToDoListCss.css'

const AddTask = ({addTask}) =>{
    const[value,updateValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(value !==""){
            addTask(value)
            updateValue("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your todo list task" value={value}
             onChange={e => updateValue(e.target.value)}>
            </input>
            <button type="submit"><i class="material-icons">add</i></button>
        </form>
    )
    
};

const ToDoList = () =>
 {
     const addTask = text => updateTask([...tasks,{text}]);
     const[tasks,updateTask] = useState([
         {
         text: "Wake Up",
         isCompleted: false,
         },
         {
         text: "Morning Exercise",
         isCompleted: false,
         },
         {
            text: "Breakfast",
            isCompleted: false,
         },
     ]);
    const toggleTask = index => {
        const newTask =[...tasks];
        if(newTask[index].isCompleted){
            newTask[index].isCompleted = false;
        }
        else{
            newTask[index].isCompleted = true;
        }
        updateTask(newTask);
     }
     const removeTask = index =>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        updateTask(newTask);
     }
     return(
         <div id="toDoListBody">
        <div className="toDoListApp">
            <p>React - ToDoList - App</p>
            {tasks.map((task,index)  => (
                <div className="taskStatus">
                    <span onClick={() => toggleTask(index)} 
                    className={task.isCompleted? "task-name completed-task":"task-name"}>
                    {/* {index} */}
                    {task.text}
                    </span>
                    <button onClick={() => {removeTask(index)}}><i class="material-icons">deleted</i></button>
                </div>
            ))}
            <AddTask addTask={addTask}/>
        </div>
        <div></div>
        <br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
 
}

export default ToDoList