const CardPerson = (props) => {
    
    return ( 
        <>
            <div className="card" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/w500"+props.profile_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            </div>
            </div>
        </>
     );
}
 
export default CardPerson;