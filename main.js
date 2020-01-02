let numTies = 0;
let playerWins = 0;
let computerWins = 0;
let started = false;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const ROCK_BUTTON = document.getElementById("rock");
const PAPER_BUTTON = document.getElementById("paper");
const SCISSORS_BUTTON = document.getElementById("scissors");
const PLAYER_WIN_COUNT_DISPLAY = document.getElementById("player-win-count");
const COMPUTER_WIN_COUNT_DISPLAY = document.getElementById("computer-win-count");
const TIE_COUNT_DISPLAY = document.getElementById("ties-count");

/**
 * Play one round of rock paper scissors.
 * 
 * @param {number} playerMove User's choice of rock, paper, or scissors.
 */
function round(playerMove){
    let computerMove = randomMove();
    console.log("Your move: " + moveToString(playerMove));
    console.log("Computer move: " + moveToString(computerMove));
    let result = winner(playerMove, computerMove);
    if (result === 0) {
        ++numTies;
        return "tie";
    } else if (result === 1) {
        ++playerWins; 
        return "You win!";
    } else if (result === 2) {
        ++computerWins;
        return "You lose :(";
    }
}
/**
 * Returns a random number between 1 and 3. 
 * This represents a move by the computer.
 */
function randomMove() {
    return Math.round(Math.random()*3) + 1;
}
/**
 * Returns the string representation of 1, 2, or 3.
 * 
 * @param {number} move A move ranging from 1 to 3 for rock, paper, or scissors.
 */
function moveToString(move) {
    if (move === ROCK) {
        return "rock";
    } else if (move == PAPER) {
        return "paper";
    } else if (move == SCISSORS) {
        return "scissors";
    }
    throw "not a move";
}
/**
 * Returns 0 if there is a tie, 1 if the winning move is by firstPlayerMove 
 * and returns 2 otherwise.
 * 
 * @param {number} firstPlayerMove 1,2 or 3 for rock, paper, or scissors.
 * @param {number} secondPlayerMove 1,2 or 3, for rock, paper, or scissors.
 */
function winner(firstPlayerMove, secondPlayerMove) {
    if (firstPlayerMove === secondPlayerMove) {
        return 0;
    }
    if (firstPlayerMove === ROCK) {
        if (secondPlayerMove === SCISSORS) {
            return 1;
        }
        return 2;       
    } else if (firstPlayerMove === PAPER) {
        if (secondPlayerMove === ROCK) {
            return 1;
        }
        return 2;   
    } else {
        if (secondPlayerMove == PAPER) {
            return 1;
        }
        return 2;
    }
}
function updateCountDisplay() {
    PLAYER_WIN_COUNT_DISPLAY.innerText = playerWins;
    COMPUTER_WIN_COUNT_DISPLAY.innerText = computerWins;
    TIE_COUNT_DISPLAY.innerText = numTies;
}
/**
 * Start the game from the begining and erase progress.
 */
function restart() {
    started = true;
    numTies = playerWins = computerWins = 0;
    updateCountDisplay();
}
ROCK_BUTTON.onclick = function() {
    round(ROCK);    
    updateCountDisplay();
}
PAPER_BUTTON.onclick = function() {
    round(PAPER);
    updateCountDisplay();
}
SCISSORS_BUTTON.onclick = function() {
    round(SCISSORS);
    updateCountDisplay;
}

