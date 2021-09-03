 
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPelis from "../components/CardPelis";

const ProfilePelis = (props) => {
    const {store, actions} = useContext(Context);
    return( 
        <div>
        <CardPelis title={props.title} url={props.url} />
        <button onClick={() => {actions.getPelis(store.Pelis)}}type="button">Prueba</button>
        </div>
        
     );

}
    

export default ProfilePelis;
