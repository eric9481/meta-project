import React from "react";
import HeroImg from "../assets/restauranfoodresized.jpg";

const CallToAction = () => {
  return (
    <div className="bg-container">
      <div className="hero container">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-sub">Chicago</p>
        <div className="hero-info">
          <p className="hero-lead">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <img
            src={HeroImg}
            className="hero-img"
            alt="A meal prepared at Little Lemon"
          />
        </div>
        <button className="hero-button">Reserve a Table</button>
      </div>

      <div className="hero desktop container">
        <div className="hero-info">
          <div>
            <h1 className="hero-title">Little Lemon</h1>
            <p className="hero-sub">Chicago</p>
            <p className="hero-lead">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="hero-button">Reserve a Table</button>
          </div>
          <img
            src={HeroImg}
            className="hero-img"
            alt="A meal prepared at Little Lemon"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
