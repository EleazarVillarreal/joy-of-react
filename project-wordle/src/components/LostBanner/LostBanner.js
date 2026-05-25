import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, onRestart }) {
  return (
    <Banner variant="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button type="button" onClick={onRestart}>
        Restart game
      </button>
    </Banner>
  );
}

export default LostBanner;
