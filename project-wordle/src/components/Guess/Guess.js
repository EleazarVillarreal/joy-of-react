import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer)

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          className={`cell ${checkedGuess ? checkedGuess[i]?.status : ''}`}
          key={i}
        >
          {checkedGuess && checkedGuess[i]?.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
