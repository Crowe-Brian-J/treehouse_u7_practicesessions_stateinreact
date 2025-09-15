import React, { useState } from 'react'

const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0)

  // Write a function that returns 5 Star components
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i} onClick={() => handleRating(i + 1)}>
          {i < courseRating ? 'Yes' : 'No'}
        </li>
      )
    }
    return stars
  }

  // Write an event handler that updates the courseRating state.
  // Pass the function to a Star component via props
  const handleRating = (rating) => {
    setCourseRating(rating)
  }

  return <ul className="course--stars">{renderStars}</ul>
}

export default StarRating
