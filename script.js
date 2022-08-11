function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    const computerMove = getRandomInt(3);
    return computerMove;
}

function playGame(playerSelection, computerSelection){
    let gameWinner = 1;   // 0 Draw, 1 player, 2 computer
    const gameDetails = document.getElementById('resultDetails');

    if(playerSelection == 0 && computerSelection == 1){
        gameDetails.textContent = "Paper beats Rock!    ~~ Computer Wins ~~";
        gameWinner = 2;
    } else if(playerSelection == 0 && computerSelection == 2){
        gameDetails.textContent = "Rock beats Scissor!    ~~ Player Wins ~~";
        gameWinner = 1;
    } else if(playerSelection == 1 && computerSelection == 0){
        gameDetails.textContent = "Paper beats Rock!    ~~ Player Wins ~~";
        gameWinner = 1;
    } else if(playerSelection == 1 && computerSelection == 2){
        gameDetails.textContent = "Scissor beats paper!    ~~ Computer Wins ~~";
        gameWinner = 2;
    } else if(playerSelection == 2 && computerSelection == 0){
        gameDetails.textContent = "Rock beats Scissor!    ~~ Computer Wins ~~";
        gameWinner = 2;
    } else if(playerSelection == 2 && computerSelection == 1){
        gameDetails.textContent = "Scissor beats Paper! ~~ Player Wins ~~";
        gameWinner = 1;
    } else {
        gameDetails.textContent = 'Draw! Please pick again.'
        gameWinner = 0;
    }
    return gameWinner;
}

function playerPlay(playerMove){

    let moveNumber = playerMove.toUpperCase();

    if(moveNumber == "rock".toUpperCase()){
        moveNumber = 0;
    } else if (moveNumber == "paper".toUpperCase()){
        moveNumber = 1;
    } else if (moveNumber == "scissor".toUpperCase()){
        moveNumber = 2;
    } 
    if(moveNumber >= 0 && moveNumber <= 2){
      return moveNumber;
    } else {
      console.log("PLAYER ERROR: Invalid option! Please enter a valid input.")
      return playerPlay();
    }
}

let playerScore = 0;
let computerScore = 0;

function game(playerMove){
  let gameWinner;
    gameWinner = playGame(playerPlay(playerMove), computerPlay());
    if(gameWinner == 1){
      playerScore++;
    } else if(gameWinner == 2){
      computerScore++;
    }

    const liveScore = document.getElementById('score');
    if(computerScore >= 5) {
        liveScore.textContent = "COMPUTER WINS";
        return 0;
    }
    if(playerScore >= 5) {
        liveScore.textContent = "PLAYER WINS";
        return 0;
    } 
    
    liveScore.textContent = playerScore + "  -  " + computerScore;






  
}



