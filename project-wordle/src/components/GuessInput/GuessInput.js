import React, { useState } from 'react'

function GuessInput({ gameOver, handleGuess }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleGuess(guess)
    setGuess('')
    console.log({ guess })
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameOver}
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={(e) => setGuess(e?.target?.value?.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        type="text"
        value={guess}
      />
    </form>
  )
}

export default GuessInput
