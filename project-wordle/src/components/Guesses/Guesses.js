import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess guess={guesses[i]} key={i} />
      ))}
    </div>
  )
}

export default Guesses
