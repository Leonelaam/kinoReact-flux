import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Home = () => {

    const {store, actions} = useContext(Context);

    return ( 
        <>
        <div className="all-container">
        <h1 className="text-center mt-5">Home</h1>
        <p className="text-center mt-3 display-3">{store.demo}</p>
        <div className="row container mx-auto" style={{background:'#f86f6f'}}>
            <div className="col-8">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ipsa aspernatur vitae? Recusandae culpa, expedita sed in molestiae deserunt doloribus magni modi eos eius nostrum illum tempora, illo accusantium possimus.</p>
            </div>
            <div className="col-4">
                <button className="btn my-5" style={{background:'#4fa8fb', color:'white'}} onClick={()=>actions.changeColor('Celeste')}>Celeste</button>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Home; 