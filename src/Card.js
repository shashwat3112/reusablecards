import React from "react";

const Card = ({title="Festival" , buttonText="Let's go", cardtext=" Holi is festival of colors"})=>{
    return(
        <div className="col-4">
        <div className="card" style={{width: "18rem"}}>
          <img
            src="https://images.pexels.com/photos/1211968/pexels-photo-1211968.jpeg?cs=srgb&dl=pexels-aneesh-ans-1211968.jpg&fm=jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {/* Some quick example text to build on the card title and make up
              the bulk of the card's content. */}
              {cardtext}
            </p>
            <a href="#" className="btn btn-success">{buttonText}</a>
          </div>
        </div>
      </div>
 
    )
}


export default Card;