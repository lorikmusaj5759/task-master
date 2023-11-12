/* sophisticated_code.js */

// This code demonstrates a complex and professional implementation of a game of Tic Tac Toe.

// Game Variables
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';
let gameOver = false;

// Function to check if a player has won
function checkWin() {
  // Rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }

  // Columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return true;
    }
  }

  // Diagonals
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return true;
  }

  return false;
}

// Function to check if the game is a draw
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return !checkWin();
}

// Function to display the board
function displayBoard() {
  console.log('-------------');
  for (let i = 0; i < 3; i++) {
    let row = '| ';
    for (let j = 0; j < 3; j++) {
      row += board[i][j] + ' | ';
    }
    console.log(row);
    console.log('-------------');
  }
}

// Function to handle player input and update the board
function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    
    if (checkWin()) {
      console.log('Player ' + currentPlayer + ' wins!');
      gameOver = true;
    } else if (checkDraw()) {
      console.log('It\'s a draw!');
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  } else {
    console.log('Invalid move, please try again.');
  }
}

// Function to start the game
function startGame() {
  console.log('========== Tic Tac Toe ==========');
  console.log('Player X goes first.');

  while (!gameOver) {
    displayBoard();

    let row = parseInt(prompt('Enter row (0-2):'));
    let col = parseInt(prompt('Enter column (0-2):'));

    makeMove(row, col);
  }

  displayBoard();
  console.log('Game Over!');
}

// Start the game
startGame();
