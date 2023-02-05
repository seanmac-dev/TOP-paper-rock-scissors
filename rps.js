function getComputerChoice(string) {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'Rock'
    case 1:
      return 'Paper'
    case 2:
      return 'Scissors'
  }
  //Everything above works
  
}function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice().toLowerCase();
  playerSelection = playerSelection().toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  )
      { para.textContent = `You lost.`;
        computerScore++;  
      } else { para.textContent = 'You won!!';}
  }
  
const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, getComputerChoice));

