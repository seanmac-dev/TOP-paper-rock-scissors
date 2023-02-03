let choices = ['Rock', 'Paper', 'Scissors'];
let weapons = choices[Math.floor(Math.random()*choices.length)];
function getComputerChoice(weapons) {
    return 'The computer chose: ' + weapons
}

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, getComputerChoice) {
    if (playerSelection === getComputerChoice) 
      {
        para.textContent = `It\'s a tie!!`;
      } else if (playerSelection === 'Rock' && getComputerChoice === 'Scissors') 
                (playerSelection === 'Scissors' && getComputerChoice === 'Paper') ||
                (playerSelection === 'Paper' && getComputerChoice === 'Rock') 
        {
        para.textContent = `You won!`;
        playerScore++
        roundWinner = `You beat the machine!!`
        }
    }
  const playerSelection = prompt();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, getComputerChoice));

