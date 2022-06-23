import React from "react";
import star from "../images/card-star.png";

function Card(props) {
    const imgPath = require(`../images/${props.item.coverImg}`)
    let badgeText

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--div">
            {badgeText != undefined && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={imgPath}/>
            <div className="card--rating_div">
                <img className="card--star" src={star} />
                <p className="card--rating">{props.item.stats.rating}</p>
                <p className="card--number">{props.item.stats.reviewCount}</p>
                <p className="card--country">{props.item.location}</p>
            </div>
            <p className="card--text">{props.item.title}</p>
            <div className="card--price_div">
                <p className="card--price">From ${props.item.price} </p>
                <p> / person</p>
            </div>
        </div>
    )
}

export default Card;