import React from 'react';

import Banner from '../Banner';

function WonBanner({ numOfGuesses, onRestart }) {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
        </strong>
        .
      </p>
      <button type="button" onClick={onRestart}>
        Restart game
      </button>
    </Banner>
  );
}

export default WonBanner;
