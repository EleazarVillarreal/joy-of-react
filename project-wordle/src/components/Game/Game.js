import React, { useState } from 'react';

import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const numOfGuesses = guesses.length;
  const isGameWon = guesses.includes(answer);
  const isGameLost =
    numOfGuesses >= NUM_OF_GUESSES_ALLOWED && !isGameWon;
  const isGameOver = isGameWon || isGameLost;

  function handleGuessSubmit(guess) {
    if (isGameOver) {
      return;
    }
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={isGameOver}
      />
      {isGameWon && <WonBanner numOfGuesses={numOfGuesses} />}
      {isGameLost && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
