let computerScore = 0;
let playerScore = 0;

function getComputerChoice () {
    // Return a random int between 0 and 2
    let randInt = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    switch (randInt) {
        case 1:
            return "paper";
            break;
        
        case 2:
            return "scissors"; 
            break;
    
        default:
            return "rock";
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
    else {
        return playerChoice;
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
       return "It's a tie";
    }
    else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "You Lose! Paper beats Rock";
        }
    }
    else {
        if (playerSelection == "rock") {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        //console.log(computerSelection);
        const playerSelection = getPlayerChoice(); 

        let results = playRound(computerSelection, playerSelection);
        
        console.log(results);
        keepScore(results);

        //console.log("Player = " + playerScore);
        //console.log("Computer = " + computerScore);
    }
}

function keepScore(results) {
    if (results.startsWith("Win", 4)) {
        playerScore++;
    }
    else if (results.startsWith("Lose", 4)){
        computerScore++;
    }
    else {
        return;
    }
}

function displayResults() {
    if (computerScore > playerScore) {
        return "Computer Wins! " + computerScore + "/" + playerScore;
    }
    else if (playerScore > computerScore) {
        return "You Win! " + playerScore + "/" + computerScore; 
    }
    else {
        return "It's  a tie! " + playerScore + "/" + computerScore;
    }
}

playGame();
console.log(displayResults());