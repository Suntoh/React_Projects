const Board= ({task,index,setTaskList,taskList}) =>{
    const handleDelete = () =>{
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTasks => currentTasks.filter(todo => index ===removeIndex)))
    }
    return(
        <>
            <div className="bg-violet-200 flex flex-col 
            items-center justify-start text-center text-xl border 
            rounded-xl max-w-xl pt-3 pb-3 px-4 md:px-6">
                <p className="break-words">{task}</p>
                <button className="bg-red-300 text-white rounded-lg py-0.5 px-2 mt-4"
                onClick={handleDelete}>
                Delete
                </button>    
            </div>
        </>
    )
}

export default Board;