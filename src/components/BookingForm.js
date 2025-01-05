import React, { useState } from "react";
import BookingPage from "./BookingPage";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };
    submitForm(formData);
    console.log(formData);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    const selectedDate = event.target.value;
    dispatch({ type: "dateChange", date: selectedDate });
  };

  const isFormValid = () => {
    return date !== "" && time !== "" && guests >= 1 && occasion !== "";
  };

  return (
    <>
    <BookingPage />
      <form onSubmit={handleSubmit} className="container form">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="time">Time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes?.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="other">Other</option>
        </select>
        <div className="wrap">
          <button type="submit" className="form-submit" disabled={!isFormValid()}>
            Make a Reservation
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
