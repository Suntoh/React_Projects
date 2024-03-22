import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
import './App.css';
import {useState} from "react";

function App() {
  const [taskList,setTaskList] =useState([]);
  console.log(taskList);

  return (
    <>
      <h1 className='text-4xl font-bold py-6 pl-6'>03 - The task Tracker</h1>
      
      <div className="flex flex-row items-center">
        <p className='text-x; pl-6'>Click </p>
        <AddTask 
        taskList={taskList}
        setTaskList={setTaskList}
        />
        <p> to add a new task</p>
      </div>
      <div className="">
        <h2 className="bg-gray-300 ml-6 font-semibold text-xl
        px-2 py-1 w-3/4 max-w-lg my-4">To Do : </h2>
        {taskList.map((task,i) => 
        <>
           <ToDo task={task}/>
        </>
        )}
      </div>
    </>
  );
}

export default App;
