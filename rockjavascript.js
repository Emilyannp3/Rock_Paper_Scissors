//creating rock app
//make a user string input as prompt
//have computer randomly choose string
//If string === string then return Draw
//If User Rock and Computer Scissors return Win else lose

//If User Paper and Computer Rock return Win else lose

parseFloat(prompt("Enter your choice"))


function getComputerChoice(arr){
const randomIndexChoice = Math.floor(Math.random() * arr.length);
const choice = arr[randomIndexChoice];
return choice;

}
const arr = ["Rock", "Paper", "Scissors"];
const result = getComputerChoice(arr);
console.log(result);