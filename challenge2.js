/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
// var nextplayerisExecuted = false;

init();
// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;

// change a content with 'textContent'
// document.querySelector('#current-' + activePlayer).textContent = dice;
// every time you write a html code, you should use '', or the console will thought that's a javascript code

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// read a content with 'textContent'
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// document.querySelector('.dice').style.display = 'none';
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

    // 1. Random number
    var dice1 =  Math.floor(Math.random() * 6) + 1;
    var dice2 =  Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = "block";
    document.getElementById('dice-2').style.display = "block";
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';


    // 3.Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !==1){
        // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextplayer();
            // Next player
        }

    // if(dice1 === 1 || dice2 === 1){
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     lastDice = -1;
    //     nextplayer();
    // }
    
    // if(dice1 === 6 && lastDice === 6){
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     lastDice = -1;
    // nextplayer();
    // } else if (dice1 !== 1){
    //     // Add score
    //     roundScore += dice1;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //     lastDice = dice1;
    //     // nextplayerisExecuted = false;
    // } else {
    //     // Next player
    //     lastDice = -1;
    //     nextplayer();
    // };
    
    // if(nextplayerisExecuted === false){
    //     lastDice = dice;
    // } else {
    //     lastDice = 0;
    // }

    // lastDice = dice;

    }
    });





document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    
    //  Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    // Undefined, 0, null or "" are coerced to false
    // Anything else is coerced to true
    if(input){
        var winningScore = input;
    } else {
        winningScore = 100;
    };
    // console.log(winningScore);
    // console.log(input);

    // var winningScore = document.querySelector(".final-score").value;
    // if(winningScore == false){
    //     winningScore = 100;
    // }

    // Chieck if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
    // Next player
    nextplayer();
    }

    }
});

function nextplayer(){

    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // nextplayerisExecuted = true;

};

// when click, then call the function, so you don't use init() here, because it will automatically call the function
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // or you can write like this
    // document.getElementById('name-0').textContent = 'Player 1';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};