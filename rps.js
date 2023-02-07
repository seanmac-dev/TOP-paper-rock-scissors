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
  playerSelection = prompt().toLowerCase();

  //const result = document.querySelector('.result'); This will be used later when you have a result div
  if (computerSelection == playerSelection) {
    return("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  )
      { return("You lost.");  
      } else { return("You won!!");}
  }
  
const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, getComputerChoice));

