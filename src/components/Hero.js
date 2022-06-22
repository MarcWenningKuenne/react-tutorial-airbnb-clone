import React from "react";
import Heroimage from "../images/gallery.png"

function Hero() {
    return (
        <section>
            <img className="hero--image" src={Heroimage} />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;