// How is R,P and S specified ? as words?
// I assume words

function getComputerChoice(){
    let randomFloat = Math.random();
    if(randomFloat <= 1/3){
        return "Rock";
    }
    else if (randomFloat > 1/3 && randomFloat <= 2/3){
        return "Paper";
    }else{
        return "Scissors";
    }
}

// Get the user input

// repeat the game 5 times. Showing the winner for each time, and then
// shoring who is the ultimate winner at the end.

for(let i = 0; i < 10; i++){
   console.log(getComputerChoice());
}
