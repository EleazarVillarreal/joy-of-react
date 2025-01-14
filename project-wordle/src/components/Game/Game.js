import React, { useState } from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guesses from '../Guesses/Guesses'
import GuessInput from '../GuessInput/GuessInput'
import GameOverBanner from '../GameOverBanner/GameOverBanner'

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [answer, setAnswer] = useState(() => sample(WORDS))

  console.log({ answer })

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

  const restartGame = () => {
    setGuesses([])
    setGameWon(false)
    setGameOver(false)
    setAnswer(sample(WORDS))
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
          restartGame={restartGame}
        />
      )}
    </>
  )
}

export default Game
