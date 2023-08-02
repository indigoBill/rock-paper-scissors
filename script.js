//GET COMPUTER CHOICE
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

//GET PLAYER CHOICE THROUGH A PROMPT & MAKE IT CASE-INSENSITIVE
function playerSelection(){
    let playerSelection = prompt("ROCK,PAPER, OR SCISSORS?");
    let playerCompare = playerSelection.toUpperCase();
    return playerCompare;
}

//PLAY A SINGLE ROUND OF THE GAME
function playRound(playerSelection, getComputerChoice){

    if(playerSelection === "ROCK"){
        if(getComputerChoice === "PAPER"){
            result(playerSelection, getComputerChoice, 0);
            return 0;
        }else if(getComputerChoice === "SCISSORS"){
            result(playerSelection, getComputerChoice, 1);
            return 1;
        }else{
            result(playerSelection, getComputerChoice);
        }
    } else if(playerSelection === "PAPER"){
        if(getComputerChoice === "ROCK"){
            result(playerSelection, getComputerChoice, 1);
            return 1;
        }else if(getComputerChoice === "SCISSORS"){
            result(playerSelection, getComputerChoice, 0);
            return 0;
        }else{
            result(playerSelection, getComputerChoice);
        }
    } else if(playerSelection === "SCISSORS"){
        if(getComputerChoice === "ROCK"){
            result(playerSelection, getComputerChoice, 0);
            return 0;
        }else if(getComputerChoice === "PAPER"){
            result(playerSelection, getComputerChoice, 1);
            return 1;
        }else{
            result(playerSelection, getComputerChoice);
        }
    }
}

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

//CREATE A FUNCTION TO ADD ONE POINT TO CURRENT SCORE & RETURN IT
function addPoint(currScore){
    currScore += 1;
    return currScore;
}

//CREATE A FUNCTION TO DISPLAY CURRENT SCORES
function displayScore(playerScore, computerScore){
    console.log(`YOUR SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
}

//PLAY A FIVE ROUND GAME OF ROCK, PAPER, SCISSORS
function game(){
    let currPlayScore = 0;
    let currCompScore = 0;

    for(round = 1; round <= 5; round++){

        console.log(`ROUND: ${round}`);
        let pointWon = playRound(playerSelection(),getComputerChoice());

        if(pointWon === 1){
            currPlayScore = addPoint(currPlayScore);
        }else if(pointWon === 0){
            currCompScore = addPoint(currCompScore);
        }

        displayScore(currPlayScore,currCompScore);
    }
}

console.log(game());
