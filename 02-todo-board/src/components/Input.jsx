import { useState } from "react";


const Input = ({taskList,setTaskList}) =>{
    const [input,setInput] = useState("")
    // console.log(input);

    const handleAddTask = (e)=>{
        e.preventDefault();
        setTaskList([...taskList,input]);
        setInput("");

    }

    return(
        <>
            <form className="flex flex-row items-cneter gap-3">
                <input
                className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type = "text"
                    placeholder="Addd a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="border rounded-lg bg-pink-300 text-white py-1 px-2 font-semibold hover:opacity-70"
                onClick={handleAddTask}>Add</button>

            </form>
        </>
    );
}

export default Input