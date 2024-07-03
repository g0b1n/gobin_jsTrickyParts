function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guessCount = 0;

    return function(guess) {
        if (gameOver) {
            return "The game is over, you already won!";
        }
        
        guessCount++;

        if (guess === secretNumber) {
            gameOver = true;
            return `You win! You found ${guess} in ${guessCount} guesses.`;
        } else if (guess < secretNumber) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`;
        }
    };
}

let game = guessingGame();

module.exports = { guessingGame };
