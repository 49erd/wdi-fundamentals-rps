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
  if (move = "rock" || "paper" || "scissors") {
      return move;
    } else {
      getInput();
    }
  }

function getComputerMove(move) {
    return randomPlay();
  }

    /*// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return  Your Expression */
    
    /*
    if (move != nil) {
        return move;
    } else if (move == nil){
        return getInput();
    };

    move.nil? ? move : getInput();*/

function getWinner(playerMove,computerMove) {
  var winner;
  if (playerMove === computerMove) {
    winner = "tie";
    } else if (playerMove === "rock") {
        if (computerMove === "paper") {
          winner = "computer";
        } else if (computerMove === "scissors") {
          winner = "player";
        }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
          winner = "player";
        } else if (computerMove === "scissors") {
          winner = "computer";
        }
    } else if (playerMove === "scissors") {
      if (computerMove === "paper") {
          winner = "player";
      } else if (computerMove === "rock"){
          winner = "computer";
        }
    } else {
        winner = "invalid entry"
    }
    return winner;
}

/*
OR...
  var winner;
  if (playerMove == "rock"){
    switch computerMove
    case "paper":
      winner = "computer";
      break;
  }
  */

/*  function move() {
# either rock, paper or scissors
  }
var winner;
winner = {
  switch playerMove();
  case "paper":
    player;
  case "rock";
    computer;
  case "paper";
    player;
  end
}
*/


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove,computerMove);
      if (winner === "player") {
        playerWins += 1;
      } else if (winner = "computer") {
        computerWins += 1;
      }

      console.log("Player chooses " + playerMove + ", Computer chooses " + computerMove + ".");
      console.log("The current score is " + playerWins + " for Player and " + computerWins + " for Computer.");

      }
    if (playerWins === 5) {
      console.log("Player is the Champion!")
    } else if (computerWins === 5) {
      console.log("Computer is the Champion!")
    }
}

playToFive();




