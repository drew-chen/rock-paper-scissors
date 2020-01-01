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
    return Math.floor(Math.random()*2) + 1;
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
/**
 * Start the game from the beggining and erase progress.
 */
function restart() {
    numTies = playerWins = computerWins = 0;
}
let numTies = 0;
let playerWins = 0;
let computerWins = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;