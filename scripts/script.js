'use strict';

let rndOption = ['Rock', 'Paper', 'Scissors'] ;
let playerScore = 0;
let compScore = 0;

const updates = document.createElement('div');
updates.classList.add('gameUpdates');
document.body.appendChild(updates);

const gameEnd = document.createElement('div');
gameEnd.classList.add('gameEnd');
document.body.appendChild(gameEnd);

const playerMsg = document.createElement('p');
const compMsg = document.createElement('p');
const roundMsg = document.createElement('p');
const scoreMsg = document.createElement('p');

const winMsg = document.createElement('p');

const btns = document.querySelectorAll('button');

checkWin();

btns.forEach((button) => {

    button.addEventListener('click' , function (e) {
        let playerSelect = button.id;
        let compSelect = computerPlay(rndOption);

        console.log(e.target);
        
        playRound(playerSelect , compSelect);
        checkWin();

    });
    
    

});


function computerPlay(rndSelect) {
    let rndPlay = Math.floor(Math.random() * rndOption.length);
    let compPlay = rndSelect[rndPlay];
    //console.log(0);
    
    return compPlay;
}


function playRound(playerChoice , compChoice) {

    playerChoice = playerChoice.toUpperCase();
    compChoice = compChoice.toUpperCase();
    
    updates.append(playerMsg,compMsg,roundMsg,scoreMsg );

    playerMsg.style.color = 'green';
    compMsg.style.color = 'red';
    //console.log({playerChoice});
    //console.log({compChoice});
    

    if (playerChoice === 'ROCK' && compChoice === 'SCISSORS'){
        playerScore ++;
        playerMsg.textContent = `You dropped ${playerChoice}` ;
        compMsg.textContent = `Computer dropped ${compChoice}`;
        roundMsg.textContent = 'Rock beats Scissors, You Win';
        scoreMsg.textContent = `Your Score : ${playerScore} | Computer Score : ${compScore}`;
    

        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Rock beats Scissors, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === 'PAPER' && compChoice === 'ROCK') {
        playerScore ++;
        playerMsg.textContent = `You dropped ${playerChoice}` ;
        compMsg.textContent = `Computer dropped ${compChoice}`;
        roundMsg.textContent = 'Paper beats Rock, You Win' ;
        scoreMsg.textContent = `Your Score : ${playerScore} | Computer Score : ${compScore}`;

        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Paper beats Rock, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === 'SCISSORS' && compChoice === 'PAPER'){
        playerScore ++ ;
        playerMsg.textContent = `You dropped ${playerChoice}` ;
        compMsg.textContent = `Computer dropped ${compChoice}`;
        roundMsg.textContent = 'Scissors beats Paper, You Win';
        scoreMsg.textContent = `Your Score : ${playerScore} | Computer Score : ${compScore}`;

        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Scissors beats Paper, You Win');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }else if (playerChoice === compChoice) {
        playerMsg.textContent = `You dropped ${playerChoice}` ;
        compMsg.textContent = `Computer dropped ${compChoice}`;
        roundMsg.textContent = 'Its a Draw';
        scoreMsg.textContent = `Your Score : ${playerScore} | Computer Score : ${compScore}`;

        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log('Its a Draw');
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
    }else {
        compScore ++;
        playerMsg.textContent = `You dropped ${playerChoice}` ;
        compMsg.textContent = `Computer dropped ${compChoice}`;
        roundMsg.textContent = `${compChoice} beats ${playerChoice} You Lose`;
        scoreMsg.textContent = `Your Score : ${playerScore} | Computer Score : ${compScore}`;

        console.log(`You dropped ${playerChoice}`);
        console.log(`Computer dropped ${compChoice}`);
        console.log(`${compChoice} beats ${playerChoice} You Lose`);
        console.log(`Your Score : ${playerScore} | Computer Score : ${compScore}`);
        
        
    }     

    console.log('');
    
    
}

function checkWin(){
    
    

    if (playerScore === 5) {
        winMsg.textContent = `Woohoo! You won with a score of ${[playerScore]} , press F5 to refresh and play again.` ;
        gameEnd.style.color = 'green';
        gameEnd.appendChild(winMsg);

        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        //alert(`Woohoo! You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
        //console.log(`You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
        return;
    }
    
    else if (compScore === 5) {
        winMsg.textContent = 'boohoo you lost, your adversary outsmarted you this time, press F5 for revenge.';
        gameEnd.style.color = 'red';
        gameEnd.appendChild(winMsg);

        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        return;
        //alert ('boohoo you lost, your adversary outsmarted you this time, press F5 for revenge.');
        
    }

    
    

    /* }else if(compScore >=3 && round >= 3){
        console.log('The Computer Won the game, press F5 to refresh and play again.');
    
    }else if (playerScore > compScore && round >= 5) {
        console.log(`Woohoo! You won with a score of ${[playerScore]} , press F5 to refresh and play again.`);
    
    }else if (playerScore === compScore && round >= 5) {
        console.log (`The game ended in a draw you both scored ${[playerScore]}, presss F5 to refresh and play again.`);
    
    }else if (playerScore < compScore && round >= 5) {
        console.log ('boohoo you lost, your adversary outsmarted you this time, press F5 for revenge. ');
    } */
 
}

function game(){

    for (let i = 1 ; i<= 5 ; i++){
    let round = i;
    
    //let playerSelect = prompt('Enter: Rock , Paper or Scissors');
    let compSelect = computerPlay(rndOption);
    //playerSelect.localeCompare(compSelect , 'en' , {sensitivity : 'base'})===0;

    console.log(`Round ${round}`);
    
    playRound(playerSelect, compSelect);
    checkWin(round);
    
    }

}


//game();