//creating rock app
//make a user string input as prompt
//have computer randomly choose string
//If string === string then return Draw
//If User Rock and Computer Scissors return Win else lose

//If User Paper and Computer Rock return Win else lose

parseFloat(prompt("Enter your choice"))
let choiceArr = ["Rock", "Paper", "Scissors"];
function getComputerChoice(choiceArr) {
    
    getComputerChoice = Math.floor(Math.random(choiceArr.indexOf()) );
    return choiceArr.toString();
    
}
console.log(getComputerChoice(choiceArr))