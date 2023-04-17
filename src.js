// How is R,P and S specified ? as words?
// I assume words

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const player_wins = 2;
const bot_wins = 3;
const draw = 0;


function getComputerChoice(){
    let randomFloat = Math.random(); // create a float between 0-1 not including.
    if(randomFloat <= 1/3){
        return rock;
    }
    else if (randomFloat > 1/3 && randomFloat <= 2/3){
        return paper;
    }else{
        return scissors;
    }
}




function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    if(lowerCasePlayerSelection == computerSelection){
        return draw;
    }

    if(lowerCasePlayerSelection == rock && computerSelection == paper){
        return player_wins;
    }else if(computerSelection = rock && lowerCasePlayerSelection==paper){
        return bot_wins;
    }

    if(lowerCasePlayerSelection == scissors && computerSelection == paper){
        return player_wins;
    }else if(computerSelection = scissors && lowerCasePlayerSelection==paper){
        return bot_wins;
    }

    if(lowerCasePlayerSelection == paper && computerSelection == rock){
        return player_wins;
    }else if(computerSelection = paper && lowerCasePlayerSelection==rock){
        return bot_wins;
    }
  }

  function Game(){
    // call playGame() multiple time
    let playerScore = 0;
    let botScore = 0;
    for(let i = 0; i < 10; i++){
      const playerSelection = "rock";
      const computerSelection = getComputerChoice();
      let tempResult = playRound(playerSelection, computerSelection);
      (tempResult == player_wins) && tempResult != draw ? playerScore++ : botScore++;
    }
    playerScore > botScore ? console.log("Player Wins :)") : console.log("Bot Wins :(");
  }
   

Game();

