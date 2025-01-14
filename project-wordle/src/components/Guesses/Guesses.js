import React from 'react'

function Guesses({ guesses }) {
  return (
    <ul className="guess-results">
      {guesses?.map((guess, i) => (
        <li className="guess" key={i}>
          {guess}
        </li>
      ))}
    </ul>
  )
}
export default Guesses
