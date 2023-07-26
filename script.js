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
/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let playerCompare = playerSelection.toUpperCase();

    if(playerCompare === "ROCK"){
        if(computerSelection === "PAPER"){
            return "YOU LOSE! PAPER BEATS ROCK";
        }else if(computerSelection === "SCISSORS"){
            return "YOU WIN! ROCK BEATS SCISSORS";
        }else{
            return "IT'S A TIE!";
        }
        
    } else if(playerCompare === "PAPER"){
        if(computerSelection === "ROCK"){
            return "YOU WIN! PAPER BEATS ROCK";
        }else if(computerSelection === "SCISSORS"){
            return "YOU LOSE! SCISSORS BEATS PAPER";
        }else{
            return "IT'S A TIE!";
        }
    } else if(playerCompare === "SCISSORS"){
        if(computerSelection === "ROCK"){
            return "YOU LOSE! ROCK BEATS SCISSORS";
        }else if(computerSelection === "PAPER"){
            return "YOU WIN! SCISSORS BEATS PAPER";
        }else{
            return "IT'S A TIE!";
        }
    }

}
*/

/*
Use the prev. function to create a new function called game().
This new function will play a 5 round game that keeps score &
reports the winner or loser at the end.

-Use console.log() to display the results of each round & the 
winner
-Use prompt() to get user input
*/

/*
PSUEDOCODE
-Assign playerSelection to prompt() to hold the user input
-Use a for loop in the game() method to loop the game 5x.
-Use conditionals to output the results of the game & each round
*/

function playerSelection(){
    let playerSelection = prompt("ROCK,PAPER, OR SCISSORS?");
    let playerCompare = playerSelection.toUpperCase();
    return playerCompare;
}

function playRound(playerSelection, getComputerChoice){

    if(playerSelection === "ROCK"){
        if(getComputerChoice === "PAPER"){
            result(playerSelection, getComputerChoice, 0);
        }else if(getComputerChoice === "SCISSORS"){
            result(playerSelection, getComputerChoice, 1);
        }else{
            result(playerSelection, getComputerChoice);
        }
        
    } else if(playerSelection === "PAPER"){
        if(getComputerChoice === "ROCK"){
            result(playerSelection, getComputerChoice, 1);
        }else if(getComputerChoice === "SCISSORS"){
            result(playerSelection, getComputerChoice, 0);
        }else{
            result(playerSelection, getComputerChoice);
        }
        
    } else if(playerSelection === "SCISSORS"){
        if(getComputerChoice === "ROCK"){
            result(playerSelection, getComputerChoice, 0);
        }else if(getComputerChoice === "PAPER"){
            result(playerSelection, getComputerChoice, 1);
        }else{
            result(playerSelection, getComputerChoice);
        }
    }

}


/*

CREATE A FUNCTION TO TRACK SCORE
CALL IT IN PLAYROUND FUNCTION
*/

//CREATE A FUNCTION FOR THE CALLS WHEN YOU WIN OR LOSE
function result(player,computer,gameOutcome){
    if(gameOutcome === 1){
        console.log(`YOU WIN! ${player} BEATS ${computer}`);
    }else if(gameOutcome === 0){
        console.log(`YOU LOSE! ${computer} BEATS ${player}`);
    }else if(gameOutcome === undefined){
        console.log(`IT'S A TIE! ${player} EQUALS ${computer}`);
    }
}

function scoreTrack(){

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(round = 1; round <= 5; round++){
        console.log(`ROUND: ${round}`);
        playRound(playerSelection(),getComputerChoice());

        
    }
}

console.log(game());
//console.log(playRound(playerSelection(),getComputerChoice()));
