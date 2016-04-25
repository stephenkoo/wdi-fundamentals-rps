////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    /*
    [BASIC VERSION]
    If (playerMove === computerMove) {
		winner = "tie";
    } else if (
    (playerMove === "rock" && computerMove === "paper") OR 
    (playerMove === "paper" && computerMove === "scissors") OR 
    (playerMove === "scissors" && computerMove === "rock")) {
		winner = "computer";
    } else {
		winner = "player";
    }
	
	[BETTER VERSION - Incomplete]
	function getWinner(playerMove,computerMove) {
	if (winnerIs("player")) {
		winner = "player";
	} else if (winnerIs("computer")) {
		winner = "computer";
	} else {
		winner = "tie";
	}
	return winner;
	}

	var moves = ["rock", "paper", "scissors"];

    */
    if (playerMove === computerMove) {
    	winner = "tie";
    } else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "rock")) {
    	winner = "computer";
    } else {
    	winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

