import Input from "./components/Input"
import Board  from "./components/board";
import { useState } from "react";

function App() {
  const [taskList,setTaskList] = useState([]);
  // console.log(taskList);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="font-semibold text-2xl">02-To Do Board</h1>
        <Input taskList = {taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex flex-col gap-5 px-4 sm:grid sm:grid-cols-4 sm:px-8 md:px-10">
        {taskList.map((task ,index) =>
          <Board 
            key={index}
            index = {index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
        />
        )}
      </div>
    </>
  );
}

export default App;
