import React from "react";
import BookingForm from "./BookingForm";
import restaurant from '../assets/restaurant.jpg'

const BookingPage = () => {
  return (
    <>
      <div className="bg-container">
        <section className="container bp">
          <div>
            <h1 className="bp-title">Reserve a Table</h1>
            <p className="bp-sub">Skip the Wait</p>
            <p>
              Reserve a table online. With only a few clicks you’ll have a booking
              made in no time. Enjoy your next meal without the delay - reserve
              now and dine stress-free!
            </p>
          </div>
          <img src={restaurant} className="bp-img" alt="Inside the little lemon restaurant." />
        </section>
      </div>
    </>
  );
};

export default BookingPage;
