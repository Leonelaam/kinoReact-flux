import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPerson from "../components/CardPerson"

const ProfilePerson = () => {
    const {store} = useContext(Context);
    //console.log(store.person);

    return ( <div className="row p-3">
        {store.person.length > 0 ? store.person.map((item)=> (<div key={item.id} className="col-lg-3 col-sm-12">
        <CardPerson name={item.name} profile_path={item.profile_path}/>
            </div>)):null}
        
        </div> 
     );
}
 
export default ProfilePerson;    
 