// Get DOM elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('resetButton');

const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');

// Choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Event Listeners
rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));
resetButton.addEventListener('click', resetGame);

// Play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;
    outcomeDisplay.textContent = `Outcome: ${result}`;
}

// Get a random choice for the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw';
    }

    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}

// Reset the game
function resetGame() {
    userChoiceDisplay.textContent = 'Your Choice: ';
    computerChoiceDisplay.textContent = 'Computer Choice: ';
    outcomeDisplay.textContent = 'Outcome: ';
}
