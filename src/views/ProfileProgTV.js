import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardProgTV from "../components/CardProgTV"

const ProfileProgTV = () => {
    const {store} = useContext(Context);
    console.log(store.progTV);

    return (
        <div className="row p-3">
        {store.progTV.map((item)=>(
        <div className="col-lg-3 col-sm-12">
            <CardProgTV name={item.name} poster_path={item.poster_path}/>
            </div>))}
        
        </div> 
     );
}
 
export default ProfileProgTV;    
 