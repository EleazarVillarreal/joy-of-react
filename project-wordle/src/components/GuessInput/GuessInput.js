import React, { useEffect, useRef } from 'react';

function GuessInput({
  guess,
  setGuess,
  handleGuessSubmit,
  onLetterKeyDown,
  onLetterKeyUp,
  onClearPressedKey,
  disabled = false,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(guess);
    setGuess('');
  }

  function handleKeyDown(event) {
    if (disabled) {
      return;
    }

    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
      onLetterKeyDown(letter);
    }
  }

  function handleKeyUp(event) {
    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
      onLetterKeyUp(letter);
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        ref={inputRef}
        disabled={disabled}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word."
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={onClearPressedKey}
      />
    </form>
  );
}

export default GuessInput;
