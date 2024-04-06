import { BrowserRouter as Router, Routes,
  Route } from "react-router-dom";

import Dashboard from "../src/components/Dashboard";
import Recommendations from "../src/components/Recommendations";
import Podcast from "../src/components/Podcast";
import { UserContext } from "./contexts/UserContext";
import Home from "./components/Home";
import { useState } from "react";



function App() {
  const [user,setUser] = useState("Prim");

  return (
    <>
      {/* <h1 className="text-center text-2xl 
      font-bold py-6 my-2">07 - useContext</h1> */}

      <Router>
        <UserContext.Provider value={[user,setUser]}>

            <Routes>
              <Route 
              path="/"
              element={<Home />}
              />
              <Route path="/dashboard" 
              element={<Dashboard />} />
              <Route path="/recommendations" 
              element={<Recommendations />} />
              <Route path ="/podcasts" 
              element={<Podcast />} />
            </Routes>

          </UserContext.Provider>
      </Router>

    </>
  );
}

export default App;
