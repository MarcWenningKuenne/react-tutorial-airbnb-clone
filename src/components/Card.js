import React from "react";
import cardImage from "../images/card-image.png";
import star from "../images/card-star.png";

function Card(props) {
    const imgPath = require(`../images/${props.img}`)
    return (
        <div className="card--div">
            <img className="card--image" src={imgPath}/>
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