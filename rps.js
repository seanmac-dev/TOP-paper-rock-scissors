let choices = ['Rock', 'Paper', 'Scissors'];
let weapons = choices[Math.floor(Math.random()*choices.length)];
function getComputerChoice (weapons) {
    return "The computer chose: " + weapons
}

