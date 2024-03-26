import { useState } from "react";
import ChangeName from "./ChangeName";

function App() {
  const [userName , setUserName] = useState("");

  const handleInput = e =>{
    setUserName(e.target.value)
  }


  return (
    <>
      <h1>04 - State and Props</h1>
      <label htmlFor ="userName">Enter your name: 
      </label>
      <input id="userName"
      type = "text"
      placeholder="My wonderful name"
      onChange={handleInput}
      />
      <p>Hi there {userName}</p>
      <p>{userName} , you are doing great.</p>
      <ChangeName
      // ChangeName = {userName => setUserName(userName)}
      // />
      // {/* change child component to parent component => child get info from parents
      // you need to change it by function like this */}
      setUserName = {setUserName} 
      userName = {userName}/>


    </>
  );
}

export default App;
