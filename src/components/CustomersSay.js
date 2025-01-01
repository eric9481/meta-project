import React from 'react'
import { IoPersonCircle } from "react-icons/io5";

const testimonials = [
  { name: "John", rating: 5, review: "Great food and friendly staff!" },
  {
    name: "Jack",
    rating: 5,
    review: "I love dinning here, it's become my family's favorite too!",
  },
  {
    name: "Jessica",
    rating: 4,
    review:
      "I really like the atmosphere at the Little Lemon and plan on going back.",
  },
  {
    name: "April",
    rating: 5,
    review: "Highly recommend. One of the best restaurants in Chicago!",
  },
];

const CustomersSay = () => {
  return (
    <div className='bg-container'>
      <div className='container cs'>
        <h2 className='cs-title'>Testimonials</h2>
        <div className='cs-cards'>
          {testimonials.map((item) => (
            <div className='cs-card' key={item.name}>
              <p className='cs-card-rating'>{item.rating}/5</p>
              <div className='cs-card-flex'>
                <IoPersonCircle className='cs-card-icon'/>
                <p className='cs-card-name'>{item.name}</p>
              </div>
              <p className='cs-card-review'>"{item.review}"</p>
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomersSay