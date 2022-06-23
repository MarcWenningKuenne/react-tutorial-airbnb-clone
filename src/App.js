import React from "react";
import "./style.css"
import data from "./data.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  const cards = data.map((x) => {
    return <Card
      key = {x.id} 
      img = {x.coverImg}
      rating = {x.stats.rating}
      reviewCount = {x.stats.reviewCount}
      country = {x.location}
      title = {x.title}
      price = {x.price}
      openSpots = {x.openSpots}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
