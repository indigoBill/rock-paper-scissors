//CREATE REFERENCE TO BUTTON ELEMENTS IN HTML 
let buttons = document.querySelectorAll(".player-select");

//DECLARE VARIABLES FOR CURRENT SCORES FOR THE GAME
let currPlayScore = 0;
let currCompScore = 0;

//GET COMPUTER CHOICE
function computerSelection(){
    let num = Math.ceil(Math.random() * 3);

    if(num === 1){
        return "ROCK";
    } else if(num === 2){
        return "PAPER";
    } else if(num === 3){
        return "SCISSORS";
    } 
}

//GET PLAYER CHOICE FROM CLICK EVENT
function playerSelection(event){
    let selectedButton = event.target.textContent;
    let playerSelection = selectedButton.toUpperCase();

    return playerSelection;
}

//CREATE A FUNCTION TO ADD ONE POINT TO CURRENT SCORE & RETURN IT
function addPoint(currScore){
    currScore += 1;
    return currScore;
}

//CREATE A FUNCTION TO DISPLAY CURRENT SCORES
function displayScore(playerScore, computerScore){
    let scoreDisplay = document.querySelector(".score");

    scoreDisplay.textContent = `YOUR SCORE: ${playerScore} COMPUTER SCORE: ${computerScore}`;
}

//RESET POINTS ONCE A PLAYER REACHES 5 POINTS
function resetGame(){
    let result = document.querySelector(".result");

    if(currPlayScore === 5){
        result.textContent = "YOU ARE THE WINNER!";
        currPlayScore = 0;
        currCompScore = 0;
    }else if(currCompScore === 5){
        result.textContent = "THE COMPUTER IS THE WINNER!";
        currPlayScore = 0;
        currCompScore = 0;
    }
}

//CREATE A FUNCTION FOR THE CALLS WHEN YOU WIN OR LOSE
function result(player,computer,gameOutcome){
    let result = document.querySelector(".result");
    
    if(gameOutcome === 1){
        result.textContent = `YOU WIN! ${player} BEATS ${computer}`;
        currPlayScore = addPoint(currPlayScore);
    }else if(gameOutcome === 0){
        result.textContent = `YOU LOSE! ${computer} BEATS ${player}`;
        currCompScore = addPoint(currCompScore);
    }else if(gameOutcome === undefined){
        result.textContent = `IT'S A TIE! ${player} EQUALS ${computer}`;
    }
    displayScore(currPlayScore,currCompScore);
    resetGame();
}

//PLAY A SINGLE ROUND OF THE GAME
function playRound(playerSelection, computerSelection){
    if(playerSelection === "ROCK"){
        if(computerSelection === "PAPER"){
            result(playerSelection, computerSelection, 0);
        }else if(computerSelection === "SCISSORS"){
            result(playerSelection, computerSelection, 1);
        }else{
            result(playerSelection, computerSelection);
        }
    } else if(playerSelection === "PAPER"){
        if(computerSelection === "ROCK"){
            result(playerSelection, computerSelection, 1);
        }else if(computerSelection === "SCISSORS"){
            result(playerSelection, computerSelection, 0);
        }else{
            result(playerSelection, computerSelection);
        }
    } else if(playerSelection === "SCISSORS"){
        if(computerSelection === "ROCK"){
            result(playerSelection, computerSelection, 0);
        }else if(computerSelection === "PAPER"){
            result(playerSelection, computerSelection, 1);
        }else{
            result(playerSelection, computerSelection);
        }
    }
}

//LOOP THRU NODELIST OF BUTTONS & ISOLATE THE BUTTON THE PLAYER SELECTS USING EVENT LISTENER
buttons.forEach(button => button.addEventListener("click", (event) => {
    playRound(playerSelection(event), computerSelection());
}));



