//creating rock app

let playerSelection = prompt("Enter your choice");

function capitalizeSelection(){
playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
return playerSelection;
}
capitalizeSelection();

let choiceArr = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    
    randomIndex = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randomIndex.toString();
    
}
let computerSelection = getComputerChoice();
let winScore = 1;
   let loseScore = 1;
   let drawScore = 1;

function playRound(){
 

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose" + loseScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win" + winScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win" + winScore++;
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win" + winScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose" + loseScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose" + loseScore++;
    }else {
        return "Draw" + drawScore++;
    }
  
}

function game(){
for (let i = 1; i < 5; i++){
    prompt("Enter your choice");
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound());
    
}
}
game();

console.log(computerSelection);
console.log(playerSelection);


console.log(playRound());
