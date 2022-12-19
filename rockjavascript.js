//creating rock app
//make a user string input as prompt
//have computer randomly choose string
//If string === string then return Draw
//If User Rock and Computer Scissors return Win else lose

//If User Paper and Computer Rock return Win else lose

let playerSelection = prompt("Enter your choice");//could have just capitalized or lowerCased all letters here

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


function playRound(){
 

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose, Computer Wins";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win";
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You win";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Win";
    }else {
        return "Draw";
    }

}
console.log(computerSelection);
console.log(playerSelection);


console.log(playRound());

//Make else statements more efficient