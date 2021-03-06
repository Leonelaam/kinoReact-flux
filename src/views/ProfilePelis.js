import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPelis from "../components/CardPelis"


const ProfilePelis = () => {
    const {store} = useContext(Context);

    //console.log(store.pelis);
    
    
    return ( 
        <div className="row p-3">
        {store.pelis.length > 0 ? store.pelis.map((item)=> (<div key={item.id} className="col-lg-3 col-sm-12">
            <CardPelis title={item.title} poster_path={item.poster_path}/>
            </div>)):null}
        </div> 
     );

}

export default ProfilePelis;

