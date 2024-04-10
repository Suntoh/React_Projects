
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = ({loggedIn,setLoggedIn,signInButton}) => {

    const [user,setUser] = useContext(UserContext);

    const handleLogOut = () =>{
        setLoggedIn(false);
        setUser({}); 
      }  
  return (
    <>
          {loggedIn ? (
              <>
              <div className="flex flex-row items-end 
              justify-end gap-2 pr-8 py-4
              ">
                <img src={user.picture} 
                alt="user profile photos" 
                className="rounded-full w-10"/>
          <button className="border rounded-lg px-3 
          py-1 bg-blue-500 text-white"
          onClick={handleLogOut}>
            Log Out
          </button>
              </div>
            <h1 className="text-3xl text-center">Welcome back, {user.given_name}</h1>
            
          </>):
          (<div className="flex flex-row items-end justify-end gap-2
          pr-8 py-4">
            <div ref={signInButton}
            ></div>
          </div>)}
    </>
  )
}

export default Header