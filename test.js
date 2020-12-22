// var age;
// var isExecuted = false;


// if (calcAge()) {
//     age = 300;
// } else {
//     age = 100;
// }

// function calcAge(){
//     isExecuted = true;
//     return isExecuted;
// };

// // calcAge();

// console.log(age);
// console.log(isExecuted);


// var gamePlaying;

// function init(){
//     gamePlaying = true;
// }

// init();

// console.log(gamePlaying);

var b;
var c;
var a = 'Hello!';
var d;

first();


function first(){
    b = 'Hi!';
    second();
        
        function second(){
            c = 'Hey!';
        }
}

function third(){
    d = 'John';
}

third();

console.log(a + b + c + d);