import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        if (!result) {
          return <span className="cell" key={index} />;
        }

        const { letter, status } = result[index];

        return (
          <span className={`cell ${status}`} key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
