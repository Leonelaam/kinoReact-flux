import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const CardPerson = (props) => {
    const {store} = useContext(Context);
    
    return ( 
        <>
            <div className="card" style={{width: "15rem"}}>
                
            {store.person.length > 0 ? store.person.map((item=>
            <div key={item.id} className="card" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/w500"+item.profile_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                <Link to= {"/person/"+item.id}><h5 className="card-title">{item.title}</h5></Link>               
                </div>
             </div>)): null}
             </div>

        </>
     );
}
 
export default CardPerson;