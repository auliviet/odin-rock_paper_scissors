let computerScore = 0;
let playerScore = 0;

function getComputerChoice () {
// Select a move (Rock, Paper or Scissors) randomly from the computer

    // Return a random int between 0 and 2
    let randInt = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    // Access the computer choice in the UI
    let computerChoice = document.getElementById("computer-choice-icon");

    // Assign random number to a move and display in the UI
    switch (randInt) {
        case 1:
            computerChoice.textContent = "📄";
            return "paper";
            break;
        
        case 2:
            computerChoice.textContent = "✂️";
            return "scissors"; 
            break;
    
        default:
            computerChoice.textContent = "🪨";
            return "rock";
            break;
    }
}

function playRound(computerSelection, playerSelection) {
// Play a round by comparing the move of the player and the computer, and return the results

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

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    let results = playRound(computerChoice, playerChoice);
    let resultsDisplay = document.querySelector("#results h3");
    resultsDisplay.textContent = results;
}

/*
function playGame() {
// Play five rounds in a row and return the winner based on the score

    for (let i = 0; i < 5; i++) {
        // Assign two variables to store computerChoice and playerChoice
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice(); 

        // Store the results of the round in a variable
        let results = playRound(computerSelection, playerSelection);
        
        // Display the results of the current round
        console.log(results);

        // Modify the score of each player
        keepScore(results);
    }
}
*/

function keepScore(results) {
// Keep track of the score of each player to select a winner at the nend of the five rounds

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
// Display the final score and the winner of the game based on who has the highest score

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

// Project variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Event listeners
rock.addEventListener("click", (event) => {
    const playerSelection = "rock";
    playGame(playerSelection);
});

paper.addEventListener("click", (event) => {
    const playerSelection = "paper";
    playGame(playerSelection);
});

scissors.addEventListener("click", (event) => {
    const playerSelection = "scissors";
    playGame(playerSelection);
});