
const buttons = document.querySelectorAll(".gameButton");
const computerScoreHolder = document.querySelector("#computerScore");
const gameStatus = document.querySelector('#gameStatus');
const gameResult = document.querySelector("#gameResult");
const roundHolder = document.querySelectorAll(".roundNum");
const playerScoreHolder = document.querySelector("#playerScore");
const roundStatus = document.querySelector('#roundStatus');
const reset = document.querySelector('#reset');
const start= document.querySelector('#start');
const gameCont = document.querySelector('#gameCont');
let clickedButton ;

// give all the buttons a click function
buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        clickedButton = e.target.id;
        gameOn();
        endGame();
    })
})

reset.addEventListener("click",()=>{
    location.reload();
})

start.addEventListener("click",()=>{
    gameCont.style.visibility = "visible";
})

// round count
let round = 0;

// score count
let computerScore = 0;
let playerScore = 0;
    




// global variables
let playerSelection,computerSelection;

// get the computers choice and return it  
function computerPlay(){
    // get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()* 3);
    let result;
    
    // switch random number for a game option
    switch(randomNumber){
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
        default:
            result = null;
    }
    
    return result;
}

// game logic to determine the winner
function getWinner(playerOpt,computerOpt){
    round++;
    if(computerOpt == "Rock" && playerOpt == "Paper"){
        gameResult.innerHTML = "You win paper beats rock!" 
        playerScore++;
    }else if(computerOpt == "Paper" && playerOpt == "Rock"){
        gameResult.innerHTML =  "Computer wins paper beats rock!";
        computerScore++;
    }else if(computerOpt == "Rock" && playerOpt == "Scissors"){
        gameResult.innerHTML = "Computer wins rock beats scissors!";
        computerScore++;
    }else if(computerOpt == "Scissors" && playerOpt == "Rock"){
        gameResult.innerHTML = "You win rock beats scissors!";
        playerScore++;
    }else if(computerOpt == "Scissors" && playerOpt == "Paper"){
        gameResult.innerHTML = "Computer wins scissors beats paper!";
        computerScore++;
    }else if(computerOpt == "Paper" && playerOpt == "Scissors"){
        gameResult.innerHTML = "You win scissors beats paper!";
        playerScore++;
    }else if(computerOpt == playerOpt){
        gameResult.innerHTML = `Draw! You and computer both chose ${playerOpt}`;
        playerScore++; computerScore++;
    }else{
        console.log("Invalid input");
    }
}

// game end function

function endGame(){
    if(round == 5){
        setTimeout(()=>{
    gameResult.innerHTML= " ";
    roundStatus.innerHTML= " ";
    if(playerScore > computerScore){
        gameStatus.innerHTML = `GAME OVER. You win `;
    }else if(playerScore == computerScore){
        gameStatus.innerHTML = `Draw! You and computer scored the same amount of points`;
    }else{
        gameStatus.innerHTML = `GAME OVER. Computer wins `;
    }
        },2000);
   }
}

// game main function

function gameOn(){
    if(round <5){
    playerSelection = clickedButton;
    computerSelection = computerPlay();
    getWinner(playerSelection,computerSelection); 
    playerScoreHolder.innerHTML = playerScore;
    computerScoreHolder.innerHTML = computerScore;
    roundHolder.forEach(roundHolder =>{
        roundHolder.innerHTML = round;
        console.log(round);
    })
    }
   
    
}

// gameOn()

