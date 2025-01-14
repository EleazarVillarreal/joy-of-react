import React, { useState } from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guesses from '../Guesses/Guesses'
import GuessInput from '../GuessInput/GuessInput'
import GameOverBanner from '../GameOverBanner/GameOverBanner'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const handleGuess = (guess) => {
    const allGuesses = [...guesses, guess]

    if (guess.toUpperCase() === answer.toUpperCase()) {
      setGameWon(true)
      setGameOver(true)
    }

    if (allGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true)
    }

    setGuesses([...allGuesses])
  }

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <GuessInput gameOver={gameOver} handleGuess={handleGuess} />
      {gameOver && (
        <GameOverBanner
          answer={answer}
          gameWon={gameWon}
          numOfGuesses={guesses.length}
        />
      )}
    </>
  )
}

export default Game
