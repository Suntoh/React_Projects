import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Feed from './Feed';


function App() {
  const [articles,setArticles] = useState([]);
  
  console.log(articles);



  const getArticles = async () =>{
    try{
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getArticles();
  },[])

  return (
      <>
        <h1 className='text-xl font-semibold
        text-center mt-5'>05 RSS Feed</h1>
        <h2 className='text-3xl font-semibold
        text-center mt-2 mb-4'>おはよう、サントーさん</h2>
        <div className='w-3/4 max-w-lg border mx-auto 
        p-5 rounded-xl'>
         <div className='bg-black flex flex-col items-center
         rounded-lg py-2 px-6 mb-5'> 
            <img src="https://cdn-images-1.medium.com/max/379/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png"
            alt='netflix tecnology blog rss feed'></img>
        </div>  
          <div className=' flex flex-col'>

          {articles.map((item,i)=>
          <Feed 
          key={i}
          title = {item.item.title}
          link = {item.item.link}
          date = {item.item.pubDate}
          />)}
          </div>
        </div>
      </>
  );
}

export default App;
