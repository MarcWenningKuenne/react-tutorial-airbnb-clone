import React from "react";
import cardImage from "../images/card-image.png";
import star from "../images/card-star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card(props) {
    return (
        <div className="card--div">
            <img className="card--image" src={cardImage}/>
            <p className="card--tag">SOLD OUT</p>
            <div className="card--rating_div">
                <img className="card--star" src={star} />
                <p className="card--rating">{props.rating}</p>
                <p className="card--number">{props.reviewCount}</p>
                <p className="card--country">{props.country}</p>
            </div>
            <p className="card--text">{props.title}</p>
            <div className="card--price_div">
                <p className="card--price">From ${props.price} </p>
                <p> / person</p>
            </div>
        </div>
    )
}

export default Card;