import React, { useState } from 'react';

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = useState('');

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word."
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
