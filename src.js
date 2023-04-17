// How is R,P and S specified ? as words?
// I assume words

const rock = "rock";
const paper = "paper";
const scissors = "scissors";


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
        return "Draw!"
    }

    if(lowerCasePlayerSelection == rock && computerSelection == paper){
        return "Player wins - paper beats rock :)"
    }else if(computerSelection = rock && lowerCasePlayerSelection==paper){
        return "Bot wins - paper beats rock :("
    }

    if(lowerCasePlayerSelection == scissors && computerSelection == paper){
        return "Player wins - scissor beats paper :)"
    }else if(computerSelection = scissors && lowerCasePlayerSelection==paper){
        return "Bot wins - scissor beats paper :("
    }

    if(lowerCasePlayerSelection == paper && computerSelection == rock){
        return "Player wins - paper beats rock :)"
    }else if(computerSelection = paper && lowerCasePlayerSelection==rock){
        return "Bot wins - paper beats rock :("
    }
  }
   

  for(let i = 0; i < 10; i++){
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
 }
 
