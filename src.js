const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const playerWins = "player";
const botWins = "bot";
const draw = "draw";


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


function playRound(playerSelection, botHand) {
    let playerHand = playerSelection.toLowerCase();

    //rock to paper
    if(playerHand === rock && botHand === paper){
        return botWins;
    }else if(botHand === rock && playerHand === paper){
        return playerWins;
    }
    //rock to scissor
    if(playerHand === rock && botHand === scissors){
        return playerWins;
    }else if(botHand === rock && playerHand === scissors){
        return botWins;
    }

    //paper to scissor
    if(playerHand === paper && botHand === scissors){
        return botWins;
    }else if(botHand === paper && playerHand === scissors){
        return playerWins;
    }

    return draw;
  }

  function Game(winningScore){
    let playerScore = 0;
    let botScore = 0;

    while(botScore !== winningScore && playerScore < winningScore || 
          playerScore !== winningScore && botScore < winningScore){
        const playerSelection = "rock";
        const botHand = getComputerChoice();
        let result = playRound(playerSelection, botHand);
        if(result == playerWins){
          playerScore++;
        }else if(result == botWins){
          botScore++;
        }
    }

    if( playerScore === winningScore){
        console.log("Player Wins :)")
    }else{
        console.log("Bot Wins :(")
    }
  }

 

  
//Game(10);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click' , (e) =>{
    const playerHand = e.target.getAttribute('id');
    const botHand = getComputerChoice();
    let winner = playRound(playerHand, botHand);

    DisplaySetWinnner(winner);
    });
});


function DisplaySetWinnner(winner){
    
    // if set winner already exist then just update
    // otherwise need to create it.
    let setResultElement = document.querySelector('.set-winner');
    console.log(setResultElement);
    if(setResultElement){
        setResultElement.textContent = `Set Winner : ${winner}`;
    }else{
        const cotainer = document.querySelector('.container');
        setResultElement = document.createElement('h2');
        setResultElement.classList.add('set-winner');
        setResultElement.textContent = `Set Winner : ${winner}`;
        cotainer.prepend(setResultElement);
    }


}

// once the player selection is pressed we play one game
// each game we display the current score of the p and b
/* once a score the winning score is reached we display
   the winner and ask if the player wants to play again
*/