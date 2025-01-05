import React from "react";
import greekSalad from "../assets/greekSalad.jpg";

const Card = ({data}) => {
  return (
    <>
      <article className="container card">
        <div className=" card-break">
          <div>
            <h3>{data.title}</h3>
            <p className="card-desc">
              {data.text}
            </p>
            <p className="card-price">{data.price}</p>
          </div>
          <img src={data.src} className="card-img" />
        </div>
      </article>
      
      <article className="card-desktop container">
        <img src={data.src} className="card-img" />
        <div className="card-content">
          <div className="card-title">
            <h3 className="card-dish">{data.title}</h3>
            <p className="card-price">{data.price}</p>
          </div>
          <p className="card-description">
            {data.text}
          </p>
          <p className="card-order">Order a delivery &gt;</p>
        </div>
      </article>
    </>
  );
};

export default Card;
