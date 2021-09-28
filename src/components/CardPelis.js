
import { Link } from "react-router-dom";
const CardPelis = (props) => {
    
    return ( 
        <>
            <div className="card" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/w500"+props.poster_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <Link to= {"/pelis/"+props.id}><h5 className="card-title">{props.title}</h5></Link>
            </div>
            </div>
        </>

     );
}
 
export default CardPelis;
