'use strict';

let rndOption = ['Rock', 'Paper', 'Scissors'] ;
let playerScore = 0;
let compScore = 0;


function computerPlay(rndSelect) {
    let rndPlay = Math.floor(Math.random() * rndOption.length);
    let compPlay = rndSelect[rndPlay];
    //console.log(0);
    
    return compPlay;
}


function playRound(playerChoice , compChoice) {

    playerChoice = playerChoice.toUpperCase();
    compChoice = compChoice.toUpperCase();
    
    //console.log({playerChoice});
    //console.log({compChoice});
    

    if (playerChoice === 'ROCK' && compChoice === 'SCISSORS'){
        playerScore ++;
        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Rock beats Scissors, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === 'PAPER' && compChoice === 'ROCK') {
        playerScore ++;
        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Paper beats Rock, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === 'SCISSORS' && compChoice === 'PAPER'){
        playerScore ++ ;
        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Scissors beats Paper, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === compChoice) {
        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Its a Draw');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
    }else {
        compScore ++;
        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log(`${compChoice} beats ${playerChoice} You Lose`);
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }     

    console.log('');
    
    
}

function checkWin(round){
    

    if (playerScore >= 3 && round >= 3) {
        alert(`Woohoo! You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
        console.log(`You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
    
    }else if(compScore >=3 && round >= 3){
        console.log('The Computer Won the game, press F5 to refresh and play again.');
    
    }else if (playerScore > compScore && round >= 5) {
        console.log(`Woohoo! You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
    
    }else if (playerScore === compScore && round >= 5) {
        console.log (`The game ended in a draw you both scored ${[playerScore]}, presss F5 to refresh and play again.`);
    
    }else if (playerScore < compScore && round >= 5) {
        console.log ('boohoo you lost, your adversary outsmarted you this time, press F5 for revenge. ');
    }
 
}

function game(){

    for (let i = 1 ; i<= 5 ; i++){
    let round = i;
    
    let playerSelect = prompt('Enter: Rock , Paper or Scissors');
    let compSelect = computerPlay(rndOption);
    //playerSelect.localeCompare(compSelect , 'en' , {sensitivity : 'base'})===0;
   

    
    console.log(`Round ${round}`);
    
    playRound(playerSelect, compSelect);
    checkWin(round);
    
    
    
    }

}


game();