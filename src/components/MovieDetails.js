import { Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

const MovieDetails = () => {
    //console.log(useParams())
    const {id} = useParams();
    const[detailsPelis, setDetailsPelis]= useState([]);
    console.log(detailsPelis)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=64b73d43a55a920af8890d10d8de7724`)
        .then(response=>response.json())
        .then(data=>{setDetailsPelis(data)});
    })
    return ( 
        <div>
        
            <div className="card container-fluid" style={{width: "20rem"}}>
            <img src={"https://image.tmdb.org/t/p/w500"+detailsPelis.poster_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{detailsPelis.title}</h5>
            <p className="card-text">{detailsPelis.overview}</p>
            
            </div>
            <Link to="/pelis" className="btn bg-primary">Ir atras</Link>
            
            </div>
        </div>
     );
}
 
export default MovieDetails;