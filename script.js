const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice () {
    // Return a random int between 0 and 2
    let randInt = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    switch (randInt) {
        case 1:
            return PAPER;
            break;
        
        case 2:
            return SCISSORS; 
            break;
    
        default:
            return ROCK;
            break;
    }
}

function getPlayerChoice () {
    let playerChoice = prompt("Select Rock, Paper or Scissors:");
    
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice != "rock" && 
        playerChoice != "paper" &&
        playerChoice != "scissors") {
            getPlayerChoice();
        }
    
    if (playerChoice == "rock") {
        return ROCK;
    }
    else if (playerChoice == "paper") {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }    
    
    else if (playerSelection)
}

const computerSelection = getComputerChoice(); 
const playerSelection = getPlayerChoice();

console.log(playRound(playerSelection, computerSelection));


