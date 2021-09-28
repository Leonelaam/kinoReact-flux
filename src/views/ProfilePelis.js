 import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPelis from "../components/CardPelis"


const ProfilePelis = () => {
    const {store} = useContext(Context);

    console.log(store.pelis);
    
    
    return ( 
        <div className="row p-3">
        {store.pelis.map((item)=> (<div className="col-lg-3 col-sm-12">
            <CardPelis title={item.title} poster_path={item.poster_path}/>
            </div>))}
        
        </div> 
     );

}

export default ProfilePelis;

