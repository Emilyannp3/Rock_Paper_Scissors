//create div that will display score and announce winner at end
const rockBtn = document.querySelector("#rock");
rockBtn.textContent = "Rock";

const paperBtn = document.querySelector("#paper");
paperBtn.textContent = "Paper";

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.textContent = "Scissors";

function buttonclick(){


    function getPlayerSelection(){
    if(elementid = "#rock"){
        return  "Rock";
    } else if (button = "Paper") {
        return "Paper";
    }else{
        return "Scissors";
    }

}
let playerSelection = getPlayerSelection();



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
console.log(computerSelection);
console.log(playerSelection);


console.log(playRound());
}


buttonclick();

const scoreDiv = document.createElement("div");
scoreDiv.style.cssText = "border: thick solid black; background: pink;";
scoreDiv.textContent = "Hello";
