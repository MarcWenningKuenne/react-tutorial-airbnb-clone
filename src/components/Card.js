import React from "react";
import star from "../images/card-star.png";

function Card(props) {
    const imgPath = require(`../images/${props.coverImg}`)
    let badgeText

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--div">
            {badgeText != undefined && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={imgPath}/>
            <div className="card--rating_div">
                <img className="card--star" src={star} />
                <p className="card--rating">{props.stats.rating}</p>
                <p className="card--number">{props.stats.reviewCount}</p>
                <p className="card--country">{props.location}</p>
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