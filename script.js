/*
3. Create a function called getComputerChoice & use it to 
generate the computers play. It should randomly return one
of the three choices: Rock, Paper, Scissors
*/

/*
PSUEDOCODE
-PICK A NUMBER BETWEEN 1 & 3 USING MATH RANDOM
-EACH NUMBER WILL REPRESENT A PLAY:
- 1 = ROCK
- 2 = PAPER
- 3 = SCISSORS
-USE IF STATEMENTS TO RETURN THE COMPUTER PLAY
*/

function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3);

    if(num === 1){
        return "ROCK";
    } else if(num === 2){
        return "PAPER";
    } else if(num === 3){
        return "SCISSORS";
    }
}

/*
Write a function that plays a single round of Rock Paper 
Scissors. The function should take two parameters - the 
playerSelection and computerSelection - and then return a string
that declares the winner of the round like so: "You Lose! Paper 
beats Rock" 

Make your function’s playerSelection parameter 
case-insensitive (so users can input rock, ROCK, RocK or any 
other variation).
*/

/*
4. Write a funtion that plays one round of the game. The function
will take two parameters -playerSelection & computerSelection &
then return a string stating the winner: "You Lose! Paper beats
Rock"

playerSelection should be case-insensitive
*/

/*
PSUEDOCODE
-Set playerSelection to "rock"
-Make playerSelection case insensitive by changing the input
to all UPPERCASE then comparing it to get the output of the game
-Set computerSelection to the getComputerChoice prev. created
-Create a function called playRound that takes two parameters
    playerSelection 
    computerSelection
-If player wins return "You Win!"
-If player loses return "You Lose!"
-If its a tie return "It's a Tie!"
*/

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let playerCompare = playerSelection.toUpperCase();

    if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        return "You Win!";
    }


}