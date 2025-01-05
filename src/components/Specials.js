import React from "react";
import Card from "./Card";
import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import bruchetta from "../assets/bruchetta.jpg";

const data = [
  {
    src: greekSalad,
    title: "Greek Salad",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    price: "$12.99",
  },
  {
    src: lemonDessert,
    title: "Lemon Dessert",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
  },
  {
    src: bruchetta,
    title: "Bruchetta",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    price: "$5.99",
  },
];

const Specials = () => {
  return (
    <section className="container">
      <div className="specials">
        <h2 className="specials-title">ORDER FOR DELIVERY!</h2>
      </div>
      <div className="specials-desktop">
        <h2>Specials</h2>
        <div>
          <button className="specials-button">Online Menu</button>
        </div>
      </div>
      <div className="specials-cards">
        {data.map((item) => (
          <Card key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
