let humanScore = 0;
let computerScore = 0;
function choice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function getPlayerChoice() {
    return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

function compareSelection(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        return "Paper beats Rock, you win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        return "Scissors beats Paper, you win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock beats Scissors, you lose!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Paper beats Rock, you lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Scissors beats Paper, you lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        return "Rock beats Scissors, you win!";
    }
}
function playGame() {
    for (let i = 0 ; i < 5 ; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = choice();
        const result =
        compareSelection (playerSelection, computerSelection);
        alert(`Round ${i + 1}: ${result}\nScore: You ${humanScore} - ${computerScore} Computer`);
    }
    let finalMessage = `Final score: You ${humanScore} - ${computerScore} Computer`;
    if (humanScore > computerScore){
        finalMessage += ' You win the game!';
    } else if (computerScore > humanScore) {
        finalMessage += ' You lose the game!';
    } else {
        finalMessage += ' The game is a Tie!';
    }
    alert (finalMessage);
}
playGame();
