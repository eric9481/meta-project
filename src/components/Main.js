import React from "react";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingForm from "./BookingForm";

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
export const submitAPI = function(formData) {
  return true;
};

export function updateTimes(state, action) {
  if (action.type === "dateChange") {
    const availableTimes = fetchAPI(new Date(action.date));
    return availableTimes;
  }
  return state;
}

export const initializeTimes = () => {
  const today = new Date();
  const availableTimes = fetchAPI(today);
  return availableTimes;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            navigate("/confirmed");
        } else {
            alert("Submission failed. Please try again.");
        }
    };


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Missing />} />
        <Route
          path="/booking"
          element={
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          }
        />
        <Route path="/order" element={<Missing />} />
        <Route path="/login" element={<Missing />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
};

export default Main;
