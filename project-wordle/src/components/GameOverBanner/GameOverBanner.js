import React from 'react'

function GameOverBanner({ answer, gameWon, numOfGuesses, restartGame }) {
  return (
    <div className={`banner ${gameWon ? 'happy' : 'sad'}`}>
      {gameWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button className="btn" onClick={restartGame}>
        Play Again
      </button>
    </div>
  )
}

export default GameOverBanner
