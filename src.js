const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const player_wins = 1;
const bot_wins = 2;
const draw = 3;


function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random()*10))%3; // create numbers 0,1,and 2 randomly.
    if(randomNumber === 0){
        return rock;
    }
    else if (randomNumber === 1){
        return paper;
    }else{
        return scissors;
    }
}


function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    if(lowerCasePlayerSelection === paper && computerSelection === rock){
        return player_wins;
    }else if(computerSelection === paper && lowerCasePlayerSelection=== rock){
        return bot_wins;
    }

    if(lowerCasePlayerSelection === scissors && computerSelection === paper){
        return player_wins;
    }else if(computerSelection === scissors && lowerCasePlayerSelection === paper){
        return bot_wins;
    }

    if(lowerCasePlayerSelection === paper && computerSelection === rock){
        return player_wins;
    }else if(computerSelection === paper && lowerCasePlayerSelection === rock){
        return bot_wins;
    }

    if(lowerCasePlayerSelection === rock && computerSelection === scissors){
        return player_wins;
    }else if(computerSelection === rock && lowerCasePlayerSelection === scissors){
        return bot_wins;
    }
  }

  function Game(winningScore){
    let playerScore = 0;
    let botScore = 0;

    while(botScore !== winningScore && playerScore < winningScore || playerScore !== winningScore && botScore < winningScore){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result == player_wins){
          playerScore++;
          console.log("p");
        }else if(result == bot_wins){
          botScore++;
          console.log("b");
        }
    }

    if( playerScore === winningScore){
        console.log("Player Wins :)")
    }else{
        console.log("Bot Wins :(")
    }
  }
  

Game(10);
