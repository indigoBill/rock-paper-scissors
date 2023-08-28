const playerButtons = document.querySelectorAll(".player-select");
let currPlayScore = 0;
let currCompScore = 0;

function computerSelection(){
    let computerChoice = Math.ceil(Math.random() * 3);

    if(computerChoice === 1){
        return "ROCK";
    } else if(computerChoice === 2){
        return "PAPER";
    } else if(computerChoice === 3){
        return "SCISSORS";
    } 
}

function playerSelection(event){
    let selectedButton = event.target.textContent;
    let playerSelection = selectedButton.toUpperCase();

    return playerSelection;
}

function addPoint(currScore){
    currScore += 1;
    return currScore;
}

function displayScore(playerScore, computerScore){
    const playScore = document.querySelector(".player-score");
    const compScore = document.querySelector(".computer-score");

    playScore.textContent = `YOUR SCORE: ${playerScore}`;
    compScore.textContent = `COMPUTER SCORE: ${computerScore}`;
}

function resetGame(){
    const clearResult = document.querySelector(".result");
    const modal = document.querySelector(".modal");
    const modalText = document.querySelector(".modal-text");
    const playButton = document.querySelector(".play-button");

    
    if(currPlayScore === 5){
        modal.style.display = "block";
        modalText.textContent = "YOU ARE THE WINNER!";
    }else if(currCompScore === 5){
        modal.style.display = "block";
        modalText.textContent = "THE COMPUTER IS THE WINNER!";
        
    }else{
        return;
    }

    function closeModal(){
        modal.style.display = "none";
        currPlayScore = 0;
        currCompScore = 0;
        displayScore(currPlayScore,currCompScore);
        clearResult.textContent = "";
    }

    playButton.addEventListener("click", closeModal);
}

function resultOfRound(playerSelection,computerSelection,gameOutcome){
    const playResult = document.querySelector(".result");
    
    if(gameOutcome === 1){
        playResult.textContent = `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        currPlayScore = addPoint(currPlayScore);
        playerScoreBoardSize();
    }else if(gameOutcome === 0){
        playResult.textContent = `YOU LOSE! ${computerSelection} BEATS ${playerSelection}`;
        currCompScore = addPoint(currCompScore);
        compScoreBoardSize();
    }else if(gameOutcome === undefined){
        playResult.textContent = `IT'S A TIE! ${playerSelection} EQUALS ${computerSelection}`;
    }
    displayScore(currPlayScore,currCompScore);
    resetGame();
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "ROCK"){
        if(computerSelection === "PAPER"){
            resultOfRound(playerSelection, computerSelection, 0);
        }else if(computerSelection === "SCISSORS"){
            resultOfRound(playerSelection, computerSelection, 1);
        }else{
            resultOfRound(playerSelection, computerSelection);
        }
    } else if(playerSelection === "PAPER"){
        if(computerSelection === "ROCK"){
            resultOfRound(playerSelection, computerSelection, 1);
        }else if(computerSelection === "SCISSORS"){
            resultOfRound(playerSelection, computerSelection, 0);
        }else{
            resultOfRound(playerSelection, computerSelection);
        }
    } else if(playerSelection === "SCISSORS"){
        if(computerSelection === "ROCK"){
            resultOfRound(playerSelection, computerSelection, 0);
        }else if(computerSelection === "PAPER"){
            resultOfRound(playerSelection, computerSelection, 1);
        }else{
            resultOfRound(playerSelection, computerSelection);
        }
    }
}

function mouseOverButtons(event){
    let mouseOver = event.target;
    mouseOver.style.backgroundColor = "rgb(236, 230, 199)";
}

function mouseOutButtons(event){
    let mouseOut = event.target;
    mouseOut.style.backgroundColor = "rgb(240, 231, 231)";
}

playerButtons.forEach(button => button.addEventListener("mouseover", mouseOverButtons));
playerButtons.forEach(button => button.addEventListener("mouseout", mouseOutButtons));

function overPlayAgainButton(event){
    let select = event.target;
    select.classList.add("selectPlayAgain");
}

function outPlayAgainButton(event){
    let select = event.target;
    select.classList.remove("selectPlayAgain");
}

const playAgainButton = document.querySelector(".play-button");

playAgainButton.addEventListener("mouseover", overPlayAgainButton);
playAgainButton.addEventListener("mouseout", outPlayAgainButton);

//LOOP THRU NODELIST OF playerButtons TO GET THE playerSelection TO PLAY A ROUND OF RPS
playerButtons.forEach(button => button.addEventListener("click", (event) => {
    playRound(playerSelection(event), computerSelection());
}));



//INCREASE SCOREBOARD SIZES FOR MORE VISUAL EMPHASIS OF WHICH PLAYER GAINED A POINT
function playerScoreBoardSize(){
    const playerBkgd = document.querySelector(".player-score");
    playerBkgd.classList.add("size-change");
}

function compScoreBoardSize(){
    const compBkgd = document.querySelector(".computer-score");
    compBkgd.classList.add("size-change");
}

//USE EVENT LISTENER TO REDUCE SCOREBOARD SIZE OF THE ROUND WINNER TO COMPLETE THE SCORE INCREASE ANIMATION
const scoreBkgds = document.querySelectorAll(".score-bkgd");

function reduceScoreBkgd(event){
    if(event.propertyName !== "transform") return;
    this.classList.remove("size-change");
}

scoreBkgds.forEach(scoreBkgd => scoreBkgd.addEventListener("transitionend", reduceScoreBkgd));








