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
    let playScore = document.querySelector(".player-score");
    let compScore = document.querySelector(".computer-score");

    playScore.textContent = `YOUR SCORE: ${playerScore}`;
    compScore.textContent = `COMPUTER SCORE: ${computerScore}`;
}

//RESET POINTS ONCE A PLAYER REACHES 5 POINTS
function resetGame(){
    let result = document.querySelector(".result");
    const modal = document.querySelector(".modal");
    const modalText = document.querySelector(".modal-text");
    const playButton = document.querySelector(".play-button");

    function closeModal(){
        modal.style.display = "none";
        currPlayScore = 0;
        currCompScore = 0;
        displayScore(currPlayScore,currCompScore);
        result.textContent = "";
    }

    if(currPlayScore === 5){
        modal.style.display = "block";
        modalText.textContent = "YOU ARE THE WINNER!";
    }else if(currCompScore === 5){
        modal.style.display = "block";
        modalText.textContent = "THE COMPUTER IS THE WINNER!";
        
    }

    playButton.addEventListener("click", closeModal);
}

//CREATE A FUNCTION TO DISPLAY THE RESULTS OF EACH PLAY
function result(player,computer,gameOutcome){
    let playResult = document.querySelector(".result");
    
    if(gameOutcome === 1){
        playResult.textContent = `YOU WIN! ${player} BEATS ${computer}`;
        currPlayScore = addPoint(currPlayScore);
        playerScoreBoardSize();
    }else if(gameOutcome === 0){
        playResult.textContent = `YOU LOSE! ${computer} BEATS ${player}`;
        currCompScore = addPoint(currCompScore);
        compScoreBoardSize();
    }else if(gameOutcome === undefined){
        playResult.textContent = `IT'S A TIE! ${player} EQUALS ${computer}`;
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

function mouseOver(e){
    let mouseOver = e.target;
    mouseOver.style.backgroundColor = "rgb(236, 230, 199)";
}

function mouseOut(e){
    let mouseOut = e.target;
    mouseOut.style.backgroundColor = "rgb(240, 231, 231)";
}

//LOOP THRU NODELIST OF BUTTONS & ISOLATE THE BUTTON THE PLAYER SELECTS USING EVENT LISTENER
buttons.forEach(button => button.addEventListener("click", (event) => {
    playRound(playerSelection(event), computerSelection());
}));

//EDIT STYLE OF BUTTONS WHEN THEY ARE HOVERED OVER
buttons.forEach(button => button.addEventListener("mouseover", mouseOver));
buttons.forEach(button => button.addEventListener("mouseout", mouseOut));

//INCREASE SCOREBOARD SIZES FOR POINT INCREASE ANIMATION
function playerScoreBoardSize(){
    const playerBkgd = document.querySelector(".player-score");
    playerBkgd.classList.add("size-change");
}

function compScoreBoardSize(){
    const compBkgd = document.querySelector(".computer-score");
    compBkgd.classList.add("size-change");
}

//USE EVENT LISTENER TO REDUCE SCOREBOARD SIZES
const scoreBkgds = document.querySelectorAll(".score-bkgd");

scoreBkgds.forEach(scoreBkgd => scoreBkgd.addEventListener("transitionend", reduceScoreBkgd));

function reduceScoreBkgd(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("size-change");
}




