 
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPelis from "../components/CardPelis";

const ProfilePelis = (props) => {
    const {store, actions} = useContext(Context);
    // imprimir por consola
    console.log(store.pelis);
    
    return ( 
        <div>
            <CardPelis title={props.title} url={props.url} />
            <button onClick={() => {actions.getPelis(store.pelis)}}type="button">Prueba</button>
        </div>
        // <div className="row">
        //     {store.map(item=>
        //     <div className="col-lg-3">
        //     <CardPelis title={item.original_title} date={item.release_date} url={item.poster_path}/>
        //     </div>)} 
        // </div>
    
     );

}

export default ProfilePelis;
