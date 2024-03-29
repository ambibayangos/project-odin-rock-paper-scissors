const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const playerWins = "player";
const botWins = "bot";
const draw = "draw";

const winningScore = 5;
let playerScore = 0;
let botScore = 0;

const rpsChoiseElement = document.querySelector('.choise-btn');


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


function determineSetWinner(playerSelection, botHand) {
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

  function Game(event){
    const playerHand = event.target.getAttribute('id');
    const botHand = getComputerChoice();
    let winner = determineSetWinner(playerHand, botHand);
    DisplaySetWinnner(winner);

    if(winner == playerWins){
        playerScore++;
        DisplayScores();
    }else if(winner == botWins){
        botScore++;
        DisplayScores();
    }

    if(playerScore == winningScore){
        displayGameOverScreen('You');
        botScore = 0;
        playerScore = 0;
    }else if (botScore == winningScore){
        displayGameOverScreen('Bot');
        botScore = 0;
        playerScore = 0;
    }
  }

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',Game);
});


function DisplaySetWinnner(winner){
    
    // if set winner already exist then just update
    // otherwise need to create it.
    let setResultElement = document.querySelector('.set-winner');
    if(setResultElement){
        setResultElement.textContent = `Set Winner : ${winner}`;
    }else{
        const cotainer = document.querySelector('.container');
        setResultElement = document.createElement('h3');
        setResultElement.classList.add('set-winner');
        setResultElement.textContent = `Set Winner : ${winner}`;
        cotainer.prepend(setResultElement);
    }
}

function DisplayScores(event){
    let scoreElement = document.querySelector('.score');
    if(!scoreElement){
        scoreElement = document.createElement('div');
        scoreElement.classList.add('score');
        scoreElement.textContent = `Player: ${playerScore} Bot: ${botScore}`;

        const container = document.querySelector('.container');
        container.prepend(scoreElement);
        return;
    }

    scoreElement.textContent = `Player: ${playerScore} Bot: ${botScore}`;
}

function displayGameOverScreen(winner){
    let matchWinnerElement = document.querySelector('.match-winner');
    if(!matchWinnerElement){

        // display the winner
        matchWinnerElement = document.createElement('h2');
        matchWinnerElement.classList.add('match-winner');
        matchWinnerElement.textContent = `${winner} won the match!`;

        // remove chouse btns and set winner elements
        const setWinnerElement = document.querySelector('.set-winner');
        const choiseBtnsElement = document.querySelector('.choise-btn');
        setWinnerElement.remove();
        choiseBtnsElement.remove();
        

        // create reset btn
        const resetElement = document.createElement('button');
        resetElement.classList.add('reset-btn');
        resetElement.textContent = `Play again`;
        const container = document.querySelector('.container');
        container.prepend(matchWinnerElement);
        container.append(resetElement);
        resetElement.addEventListener('click', resetGameScreen);

        return;
    }

    matchWinnerElement.textContent = `${winner} won the match!`;
}

function resetGameScreen(){
    const scoreElement = document.querySelector('.score');
    const matchWinnerElement = document.querySelector('.match-winner');
    const resetElement = document.querySelector('.reset-btn');
    scoreElement.remove();
    matchWinnerElement.remove();
    resetElement.remove();

    
    const container = document.querySelector('.container');
    container.append(rpsChoiseElement);
    

}
