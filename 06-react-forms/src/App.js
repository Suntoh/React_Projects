import { useState } from "react";


function App() {
  const tdy = new Date();
  const [userInfo ,setUserInfo] = useState({
    firstName:"",
    lastName:"",
    email: "",
    dob:"",
    gender:"",
    prompt1:"",
    answer1:"",
  })
  const handleInput = (e) =>{
    const {name,value} = e.target;
    setUserInfo({
      ...userInfo,
      [name]:value
    })

  }
    const handleDelete = (e,i) =>{
      let deletePrompts = [...prompts]
      deletePrompts.splice(i,1);
      setPrompts(deletePrompts);
  }

  const [prompts,setPrompts] = useState([{
    prompt:"",
    answer:"",
    timestamp:new Date().getTime(),
  }])

  const handleAdd = (e,i) => {
    const {name,value} = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt =()=>{
    setPrompts([...prompts,{
      prompts:"",
      answer:"",
      timestamp : new Date().getTime(),

    }]);
  }

  console.log(userInfo);
  console.log(prompts);


  return (
    <>
      <h1 className='text-3xl text-center my-4 py-2
      pb-10'>
        06 - React Forms</h1>
        <form className="w-5/6 max-w-xl mx-auto">
          <fieldset className="flex flex-col border gap-2 py-2
          px-4">
            <legend className="text-2xl font-semibold
            mb-2 text-gray-500">
              About YOU!</legend>
              <div className="flex flex-col">
                <label className="text-3xl font-semibold">
                  What's your name?</label>
                <input
                className="w-3/5 border rounded text-lg
                leading-tight py-2 px-2 mt-4 mb-3
                focus:outline-indigo-300"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleInput}
                />
              <input
              className="w-3/5 border rounded text-lg
              leading-tight py-2 px-2 mt-4 mb-3
              focus:outline-indigo-300"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleInput}
              />
            </div>
            <div className="flex flex-col">

            <label className="text-3xl font-semibold">
              What's your email?</label>
              <input 
              className="w-3/5 border rounded text-lg
              leading-tight py-2 px-2 mt-4 mb-3
              focus:outline-indigo-300"
              id="email"
              name = "email"
              type="email"
              placeholder="example@email.com"
              onChange={handleInput}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-3xl font-semibold"
              >What's your date of birth</label>
              <input
              className="w-3/5 border rounded text-lg
              leading-tight py-2 px-2 mt-4 mb-3
              focus:outline-indigo-300"
              id="dob"
              name="dob"
              type="date"
              max = "2006-03-31"
              placeholder="Date of Borth" //won't show up
              onChange={handleInput}
              />
             </div>
            <div className="flex flex-col">
              <label className="text-3xl font-semibold"
              >What's your gender?</label>
              <select id="gender"name="gender"
               className="w-3/5 border rounded text-lg
               leading-tight py-2 px-2 mt-4 mb-3
               focus:outline-indigo-300"
               onChange={handleInput}>
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="MTF">MTF</option>
                <option value="FTM">FTM</option>
                <option value="Non">Non-Binary</option>
                <option value="Unknown">Prefer not to say</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="flex flex-col border gap-2 py-2
          px-4">
            <legend className="text-2xl font-semibold
            mb-2 text-gray-500">
            Prompt
            </legend>
            {prompts.map((prompt,i) =>(
              <div key={prompt.timestamp} className="flex flex-col">
                <label className="text-3xl font-semibold">Select a Prompt</label>
                <div className="flex flex-row items-center
              gap-2">

              <select className="w-5/6 border rounded text-lg
               leading-tight py-2 px-2 mt-4 mb-3
               focus:outline-indigo-300"
               id="prompt" name="prompt"
               onChange={e=>handleAdd(e,i)}>
                <option>Prompt</option>
                <option value="dating me is">Dating me is like...</option>
                <option value="fact that surprise">Fact about me that suprises people</option>
                <option value="someone who">I want someone who...</option>
                <option value="spend most money">I spend most of my money on:</option>
                <option value="same weird">We're the same type of weird if...</option>
                <option value="ex">I think of my ex as:</option>
              </select>
              <button className="border bg-red-400 py-1.5 px-2 rounded-lg
              text-white font-bold w-1/6 text-xl"
              onClick={e=>handleDelete(e,i)}
              type="button"
              >-</button>
              </div>

              

              <textarea
              className="border border-dashed py-3 px-2
              mb-4 focus:outline-indigo-200"
                id="answer"
                name="answer"
                rows={5}
                placeholder="Let your true colours shine through"
                onChange={e =>handleAdd(e,i)}
                />
            </div>
            )
              )}
            <div className="w-full flex justify-center">
              <button className="boder bg-indigo-400 py-1
              px-2 rounded-lg text-white font-bold text-xl"
              type = "button"
              onClick={handleAddPrompt}
              >Add Prompt</button>
              
            </div>
          </fieldset>

        </form>
    </>
  );
}

export default App;
