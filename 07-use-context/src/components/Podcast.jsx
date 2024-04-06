import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";

const Podcast = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user}</h1>
      <h2>Your Podcast</h2>
    </div>
  )
}

export default Podcast