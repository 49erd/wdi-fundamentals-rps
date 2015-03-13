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
    var move
    move = move || getInput();
    }

    /*
    if (move = "rock" || "paper" || "scissors") {
      return move;
    } else {
      return getInput();
    }
    */
    /*// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return  Your Expression */

function getComputerMove(move) {
    var move
    move = move || randomPlay();
    }
    /*
    if (move = "rock" || "paper" || "scissors") {
      return move;
    } else {
      return randomPlay();
    }
    */

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
  var playerWins;
  var computerWins;
  if (playerMove == computerMove) {
    return winner = "tie";
    } else if (playerMove == "rock") {
        if (computerMove == "paper") {
          return winner = "computer";
          computerWins += 1;
        } else if (computerMove == "scissors") {
          return winner = "player";
          playerWins += 1;
        }
    } else if (playerMove == "paper") {
      if (computerMove == "rock") {
          return winner = "player";
          playerWins += 1;
        } else if (computerMove == "scissors") {
          return winner = "computer";
          computerWins += 1;
        }
    } else if (playerMove == "scissors") {
      if (computerMove == "paper") {
          return winner = "player";
          playerWins += 1;
      } else if (computerMove == "rock"){
          return winner = "computer";
          computerWins += 1;
        }
    } else {
        return winner = "invalid entry"
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
    if playerWins == 5 {
        return "Player wins it all!";
    } else if computerWins == 5 {
        return "Computer wins it all!";
    } else {
      return null
    }
    return [playerWins, computerWins];
  }

for (var playToFive() = false; playToFive() = false; ) {
  getWinner();
}
