function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    const computerMove = getRandomInt(3);
    return computerMove;
}

function playGame(playerSelection, computerSelection){
    let gameWinner = 1;   // 0 Draw, 1 player, 2 computer

    if(playerSelection == 0 && computerSelection == 1){
        console.log("Paper beats Rock! ~~ Computer Wins ~~")
        gameWinner = 2;
    } else if(playerSelection == 0 && computerSelection == 2){
        console.log("Rock beats Scissor! ~~ Player Wins ~~")
        gameWinner = 1;
    } else if(playerSelection == 1 && computerSelection == 0){
        console.log("Paper beats Rock! ~~ Player Wins ~~")
        gameWinner = 1;
    } else if(playerSelection == 1 && computerSelection == 2){
        console.log("Scissor beats paper! ~~ Computer Wins ~~")
        gameWinner = 2;
    } else if(playerSelection == 2 && computerSelection == 0){
        console.log("Rock beats Scissor! ~~ Computer Wins ~~")
        gameWinner = 2;
    } else if(playerSelection == 2 && computerSelection == 1){
        console.log("Scissor beats Paper! ~~ Player Wins ~~")
        gameWinner = 1;
    } else {
        console.log("Draw! The game will be replayed!")
        gameWinner = playGame(playerPlay(), computerPlay());
    }
    return gameWinner;
}

function playerPlay(){
    let playerMove = prompt("Enter your move (Rock/Paper/Scissor): ");
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


function game(roundsNumber){
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner;
  for(i = 0; i < roundsNumber; i++){
    gameWinner = playGame(playerPlay(), computerPlay());
    if(gameWinner == 1){
      playerScore++;
    } else if(gameWinner == 2){
      computerScore++;
    }
}
    console.log("\n\n~~~ Final Score ~~~\n")
    console.log("Player ", playerScore, " - ", computerScore, " Computer")
  
}


// console.log(playGame(playerPlay(), computerPlay()));
game(5);