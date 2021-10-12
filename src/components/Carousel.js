import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import img1 from "../assets/img/img1.jpeg"
const Carousel = () => { 
  const {store} = useContext(Context);
  
    return ( 
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  {store.pelis.map((item,index)=>
                    index === 0 ?
                    <div key={item.id} className="carousel-item active">
                        <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path} className="d-block w-100" alt="..." />
                    </div>:
                    <div key={item.id} className="carousel-item">
                        <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}  className="d-block w-100" alt="..." />
                    </div>)}
  
  {/* <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
      </div>
      {home.map((item => <div className="carousel-item">
      <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className="d-block w-100" alt="..."/>
      </div>))} */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}
 
export default Carousel;