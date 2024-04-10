import { useEffect, useRef, useState } from "react";
import jwt_decode, { jwtDecode } from "jwt-decode";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Episode from "./components/Episode";

//npm i jwt-decode
function App() {

  const [user,setUser ] = useState({});
  const [loggedIn,setLoggedIn] = useState(false);
  const signInButton =useRef();
  const [data,setData] = useState([]);
  //console.log(data);

  const handleCallback = (res) =>{
  
    //console.log("Encoded token :" + res.credential);
    let user = jwtDecode(res.credential);
    console.log(user);
    setUser(user);
    setLoggedIn(true);
  }

  useEffect(() =>{
    /*global google */
    google.accounts.id.initialize({
      client_id:"591954613676-nrk2d5mfjom869ika6gj813i9npmecq1.apps.googleusercontent.com",
      callback: handleCallback
    });
    google.accounts.id.renderButton(
      signInButton.current,
      {theme:"outline", size:"large"}
    );


  },[loggedIn])
  //this will make it render every time loggedIn changed

  const rssFeed = "https://cdn.atp.fm/rss/public?m2swoundx"
  useEffect(() =>{
    fetch(rssFeed)
    .then(res=> res.text())
    .then(str => {
      const parser = new window.DOMParser();
      const data = parser.parseFromString(str,"text/xml");
      const itemList = data.querySelectorAll("item");
      const items = [];
      itemList.forEach(elem =>{
        items.push({
        title: elem.querySelector("title").innerHTML,
        pubDate: new Date(elem.querySelector("pubDate").textContent)
        .toLocaleDateString("ja-JP-u-ca-japanese",
        {day:"numeric",month:"long",year:"numeric"}),
        mp3: elem.querySelector("enclosure").getAttribute("url"),
          link:elem.querySelector("link").innerHTML,
        })
      })
      setData(items);
    })
  },[rssFeed])


  return (
    
    <UserContext.Provider value={[user,setUser]}>
    <Header loggedIn={loggedIn} 
    setLoggedIn={setLoggedIn}
    signInButton = {signInButton}
    />
       <h1 className="text-3xl mt-5 py-2 text-center">
        08 - Learn With Podcasts</h1>
    {loggedIn ? (
    <div className="pl-4 flex flex-col ">
      <h2 className="text-2xl font-medium py-3">Accidental Tech Podcasts</h2>
        {data.slice(0,100).map((elem , i) =>
        <Episode 
        key={i}
        title = {elem.title}
        pubDate = {elem.pubDate}
        link = {elem.link}
        mp3 = {elem.mp3}
        />
      )}
    </div>)
    :<div className="flex flex-col text-2xl text-center
     py-5 gap-3 mx-auto px-5 pt-6">
      <h2>Want to Listen to some Podcasts!</h2>
      <h1 className="text-3xl text-pink-600">Log in Now!</h1>
    </div>}
    
        
  </UserContext.Provider>
  );
}

export default App;
