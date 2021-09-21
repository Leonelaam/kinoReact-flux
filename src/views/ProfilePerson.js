import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPerson from "../components/CardPerson"

const ProfilePerson = () => {
    const {store} = useContext(Context);
    console.log(store.person);

    return ( 

        <div className="row p-3">
        {store.person.map((item)=>(
        <div className="col-lg-3 col-sm-12">
            <CardPerson name={item.name} profile_path={item.profile_path}/>
            </div>))}
        
        </div> 
     );
}
 
export default ProfilePerson;    
 