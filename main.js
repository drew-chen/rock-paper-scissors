function round(playerMove){
    let computerMove = randomMove();
}
function randomMove() {
    return Math.floor(Math.random()*2) + 1;
}
/* 
    Returns 1 if the winning move is by firstPlayerMove and returns
*/
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
let tieCount = 0;
let playerWins = 0;
let computerWins = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;