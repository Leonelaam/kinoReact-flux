import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CardPelis = (props) => {
    const {actions} = useContext(Context);
    
    
    return ( 
        <div>
        
            <div className="card" style={{width: "15rem"}}>
                <img src= {"https://image.tmdb.org/t/p/w500"+props.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                <Link to= {"/pelis/"+props.id}><h5 className="card-title">{props.title}</h5></Link>               
                </div>
                <div>
                <FontAwesomeIcon icon={faHeart} onClick={()=>actions.addFavoritos(props.title)} />
                </div>
             </div>
             
             
        </div>
        );
    
            
     }
         
 export default CardPelis;