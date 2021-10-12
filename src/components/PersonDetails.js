import { Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

const PersonDetails = () => {
    const {id} = useParams();
    const[detailsPerson, setDetailsPerson]= useState({});
    

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=64b73d43a55a920af8890d10d8de7724`)
        .then(response=>response.json())
        .then(data=>{setDetailsPerson(data)});
    }, []);
   
    return ( 
        <div>
            <div className="card container-fluid" style={{width: "20rem"}}>
            <img src={"https://image.tmdb.org/t/p/w500"+detailsPerson.profile_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{detailsPerson.title}</h5>
            <p className="card-text">{detailsPerson.overview}</p>
            </div>
            <Link to="/pelis" className="btn bg-primary">Ir atras</Link>
            
            </div>
        </div>
     );
}
 
export default PersonDetails;