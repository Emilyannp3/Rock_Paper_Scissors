//creating rock app
//make a user string input as prompt
//have computer randomly choose string
//If string === string then return Draw
//If User Rock and Computer Scissors return Win else lose

//If User Paper and Computer Rock return Win else lose

parseFloat(prompt("Enter your choice"))

function getComputerChoice(arr){
const arr = ["Rock", "Paper", "Scissors"];
const randomIndexChoice = Math.floor(Math.random() * arr.length);

const choice = arr[randomIndexChoice];
return choice;

}
const computerSelection = getComputerChoice();
let result = getComputerChoice(arr);
let playerSelection = "rock";
function playRound(playerSelection, computerSelection){

    if (playerSelection("Rock") && computerSelection("Paper") ) ; {
    return "You Lose";
}
}


console.log(playRound(playerSelection, computerSelection));
// if (playerSelection = computerSelection);{
 //   return "Draw";
 //const result = getComputerChoice(arr);
 //