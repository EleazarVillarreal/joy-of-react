import React, { useState } from 'react';

import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

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

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={isGameOver}
      />
      {isGameWon && (
        <WonBanner numOfGuesses={numOfGuesses} onRestart={handleRestart} />
      )}
      {isGameLost && (
        <LostBanner answer={answer} onRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
