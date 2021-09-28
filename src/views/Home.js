import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";

const Home = () => {
  const [home, setHome]= useState([]);
  console.log(home)

  useEffect(()=>{
    fetch ('https://api.themoviedb.org/3/movie/popular?api_key=64b73d43a55a920af8890d10d8de7724')
    .then(response=>response.json())
    .then(data=>setHome(data.results));
  }, [])

    return ( 
        <div>
           <Carousel home={home}/> 
           
        </div>
     );
}
 
export default Home;
