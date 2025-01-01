import React from "react";
import Group from '../assets/GroupChicagoFix.jpg'

const Chicago = () => {
  return (
    <div className="container chicago">
      <div>
        <h2 className="chicago-title">Little Lemon</h2>
        <p className="chicago-sub">Chicago</p>
        <p className="chicago-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit.
        </p>
      </div>
      <img src={Group} className="chicago-img" />
    </div>
  );
};

export default Chicago;
