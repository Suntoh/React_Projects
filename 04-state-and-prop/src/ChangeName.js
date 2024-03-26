let temp ="";

const ChangeName = ({setUserName,userName}) =>{

    const handlePropChange = () =>{
        // prop.ChangeName("there");
        if(userName === "there"){
            setUserName(temp)
        } else{
            setUserName("there");
            temp = userName;
        }
        console.log(temp);
    }

    return(
        <>
        <button onClick={handlePropChange}
        >Hide My Name</button>
        <p>{userName} rakprim</p>
        </>
    )
}

export default ChangeName;