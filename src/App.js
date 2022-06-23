import React from "react";
import "./style.css"
import data from "./data.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";


function App() {
  const cards = data.map((item) => {
    return <Card
      key = {item.id}
      {...item}
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
