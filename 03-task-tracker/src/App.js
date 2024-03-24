import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
import './App.css';
import {useEffect, useState} from "react";
import { useDrop } from "react-dnd";

function App() {
  const [taskList,setTaskList] =useState([]);
  const [completed,setCompleted] = useState([]);
  // console.log(taskList);

  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if(array) {
      setTaskList(JSON.parse(array))
    }
  },[])
  //still failed to get drag and drop working 

  // const [{ isOver },drop] = useDrop(() =>({
  //   accept:"todo",
  //   drop: (item) => addToCompleted(item.id,item.projectName,item.taskDescription
  //     ,item.timestamp,item.duration),
  //   collect : (monitor) => ({
  //     isOver: !! monitor.isOver(),
  //   })
  // }))

  // const addToCompleted = (id,projectName,taskDescription,timestamp,duration) =>{
  //   const moveTask = taskList.filter((task) => id === task.id);
  //   setCompleted((completed) =>[...completed , { moveTask,projectName
  //     , taskDescription, timestamp, duration}])
  //      // setTaskList(
  //           //     [...taskList, { projectName , taskDescription 
  //           //     ,timestamp:timestamp}]
  //           // );
  //     console.log("this is "+completed.length);
  // }

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
      <div className="flex felx-row">
        <div className="w-full">
        <h2 className="bg-gray-300 ml-6 font-semibold text-xl
        px-2 py-1 w-3/4 max-w-lg my-4">To Do : </h2>
          <div className="flex flex-col-reverse ml--6">    
          {taskList.map((task,i) => 
           <ToDo key = {i} index = {i} taskList = {taskList} 
           setTaskList={setTaskList} task={task}/>
           )}
          </div>
      </div>
        {/* <div className="w-full flex flex-col" ref={drop}>
          <h2 className="bg-gray-300 ml-6 font-semibold text-xl
          px-2 py-1 w-3/4 max-w-lg my-4">
            Completed: 
          </h2>
          {completed.map((task,i) => 
           <ToDo key = {i} index = {i} taskList = {taskList} 
           setTaskList={setTaskList} task={task}/>
           )}
        </div> */}
      </div>
    </>
  );
}

export default App;
