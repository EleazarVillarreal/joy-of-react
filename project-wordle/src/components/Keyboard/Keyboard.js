import React from 'react';

import { checkGuess } from '../../game-helpers';

const KEYBOARD_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const STATUS_PRIORITY = { correct: 3, misplaced: 2, incorrect: 1 };

function getUsedLetterStatuses(guesses, answer) {
  const statuses = {};

  for (const guess of guesses) {
    const result = checkGuess(guess, answer);
    for (const { letter, status } of result) {
      if (
        !statuses[letter] ||
        STATUS_PRIORITY[status] > STATUS_PRIORITY[statuses[letter]]
      ) {
        statuses[letter] = status;
      }
    }
  }

  return statuses;
}

function Keyboard({ guesses, answer, pressedKey }) {
  const letterStatuses = getUsedLetterStatuses(guesses, answer);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row) => (
        <div className="keyboard-row" key={row}>
          {row.split('').map((letter) => {
            const status = letterStatuses[letter] || 'unused';
            const isActive = letter === pressedKey;

            return (
              <span
                className={`key ${status}${isActive ? ' active' : ''}`}
                key={letter}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
