import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const Home = () => {
    const [user,setUser]=useContext(UserContext)
  return (
    <div className="flex flex-col items-center">

        <h1>07 Use Context</h1>
        <div className="flex flex-row items-center gap-4">
        <h1 className="text-xl mt-4 mb-2">{user}'s Home</h1>

        <button className="text-xs border bg-blue-500 text-white
        py-1 px-2 rounded-lg"
        type="button"
        onClick={()=>setUser("Suntoh")}>Edit name</button>

        </div>
        <Link to="/dashboard"
        className="text-indigo-500
        hover:opacity-50">Your DashBoard</Link>
        <Link to="/recommendations"
        className="text-indigo-500
        hover:opacity-50">Your Recommendation</Link>
        <Link to="/podcasts"
        className="text-indigo-500
        hover:opacity-50">Your Podcasts</Link>
    </div>
  )
}

export default Home;