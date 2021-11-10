let playerSelection,computerSelection;

function computerPlay(){
    // get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()* 3);
    let result;
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

function getWinner(playerOpt,computerOpt){

    if(computerOpt == "Rock" && playerOpt == "Paper"){
        console.log("You win paper beats rock!");
    }else if(computerOpt == "Paper" && playerOpt == "Rock"){
        console.log("Computer wins paper beats rock!");
    }else if(computerOpt == "Rock" && playerOpt == "Scissors"){
        console.log("Computer wins rock beats scissors!");
    }else if(computerOpt == "Scissors" && playerOpt == "Rock"){
        console.log("You win rock beats scissors!");
    }else if(computerOpt == "Scissors" && playerOpt == "Paper"){
        console.log("Computer wins scissors beats paper!");
    }else if(computerOpt == "Paper" && playerOpt == "Scissors"){
        console.log("You win scissors beats paper!");
    }else if(computerOpt == playerOpt){
        console.log(`Draw! You and computer both chose ${playerOpt}`);
    }else{
        console.log("Invalid input");
    }
}

function gameOn(){
    playerSelection = prompt("What do you choose? ");
    computerSelection = computerPlay();
    getWinner(playerSelection,computerSelection);
}

gameOn();