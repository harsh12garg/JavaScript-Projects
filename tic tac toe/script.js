const board = document.getElementById('board');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

// Initialize the game board
function initBoard() {
    board.innerHTML = '';
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

// Handle cell click
function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (boardState[index] === '' && !checkWinner()) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
        } else if (boardState.every(cell => cell !== '')) {
            setTimeout(() => alert('It\'s a draw!'), 100);
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

// Reset the game
function resetGame() {
    initBoard();
}

// Initialize the board when the page loads
initBoard();

// Add event listener to the reset button
resetButton.addEventListener('click', resetGame);
