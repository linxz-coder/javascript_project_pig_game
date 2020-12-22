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
    var dice = 2;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3.Update the round score IF the rolled number was NOT a 1
   if(dice === 2 && lastDice === 2){
    //    Player loses score
    scores[0] = 1;
    document.querySelector('#score-0').textContent = '1';
    lastDice = -1;
    nextplayer();
    } else if (dice !== 1){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        lastDice = dice;
        // isExecuted = false;
    } else {
        // Next player
        lastDice = -1;
        nextplayer();
    };
    
    // if(isExecuted === true){
    //     lastDice = 0;
    // } else {
    //     lastDice = dice;
    // }
    
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

    document.querySelector('.dice').style.display = 'none';

    lastDice = -1;

    // isExecuted = true;
    // return isExecuted;

};

// when click, then call the function, so you don't use init() here, because it will automatically call the function
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
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