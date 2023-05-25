// const a = prompt("Enter The First Number >>> ",0) - 0;

// const b = prompt("Enter The Operator >>> ", '+');

// const c = prompt("Enter The Second Number >>> ", 0) - 0;




// // Add two items
// const add = function(a , b) {
//     return (a + b);
// }

// // Subtract two items
// const subtract = function(a , b) {
//     return a - b;
// }

// // Multiply two items
// const multiply = function(a , b) {
//     return a * b;
// }

// // Divide two items
// const divide = function(a , b) {
//     return a / b;
// }


// if (b === '+') {
//     alert(add(a,c));
// } 
// else if (b === '-') {
//     alert(subtract(a,c));
// } 
// else if (b === '*') {
//     alert(multiply(a,c));
// } 
// else if (b === '/') {
//     alert(divide(a,c));
// } 
// else {
//     alert("Something Wrong! Please Try Again Later.");
// }







// Define Variable for each element in DOM

const display = document.querySelector('.display-screen');

let displayText = Array.from(document.querySelector('.display-screen').textContent);

const clear = document.querySelector('.clear');

const sign = document.querySelector('.sign');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');

const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const equal = document.querySelector('.equal-sign');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const decimal = document.querySelector('.decimal');





// Write funtion for clearScreen


window.addEventListener('click', function () {


    display.textContent = Number(displayText.join("")).toLocaleString('en-IN');

    if (!(displayText.length == 1 && displayText[0] == '0')) {

        clear.textContent = "C";
        
    }
    else {

        clear.textContent = "AC";

    }


    if (displayText.length > 9) {

        if (displayText[0] != '-') {

            const newValue = displayText.slice(0,9).join('');
            display.textContent = Number(newValue).toLocaleString('en-IN');
            displayText = newValue.toString().split('');

        }
        else if (displayText[0] == '-') {

            const newValue = displayText.slice(0,10).join('');
            display.textContent = Number(newValue).toLocaleString('en-IN');
            displayText = newValue.toString().split('');

        }
    }
    
});


function clearScreen() {

    displayText = [0];
    display.textContent = displayText;
    
};

// Change Negative or Positive sign

function changeSign() {

    if (displayText.length == 1 && displayText[0] == '0') {
        return;
    }

    if (displayText.length >= 9) {

        if (displayText[0] != '-') {
            displayText.unshift("-");
            display.textContent = displayText.slice(0,10).join("");
            displayText = display.textContent.toString().split('');

        }
        else if (displayText[0] == '-') {
            displayText.shift("-");
            
            display.textContent = displayText.join("");
        }
    }
    // Add '-' at the beginning
    else {
        if (displayText[0] != '-') {
            displayText.unshift("-");
            display.textContent = displayText.join("");
        }
    
        // Remove '-' from the beginning
    
        else if (displayText[0] == '-') {
            displayText.shift("-");
            display.textContent = displayText.join("");
        }
    }
    
}

// ALgorithm For Percentage 

function percent() {

    let value = ((Number(displayText.join(""))) / 100);
    displayText = [value];
    displayText = displayText.toString().split('');

    if (displayText.length > 11) {
        let newValue = Number(displayText.join('')).toExponential(3);
        displayText = [newValue];
        displayText = displayText.toString().split('');
        display.textContent = displayText.join('');
    }
    else {
        display.textContent = displayText.join('');
    }
}


function nineDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [9];

    }
    else {

        displayText.push("9");

    }
    
    display.textContent = displayText.join("");
}

function eightDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [8];
        
    }
    else {

        displayText.push("8");

    }
    
    display.textContent = displayText.join("");
}

function sevenDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [7];
        
    }
    else {

        displayText.push("7");

    }
    
    display.textContent = displayText.join("");
}

function sixDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [6];
        
    }
    else {

        displayText.push("6");

    }
    
    display.textContent = displayText.join("");
}

function fiveDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [5];
        
    }
    else {

        displayText.push("5");

    }
    
    display.textContent = displayText.join("");
}

function fourDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [4];
        
    }
    else {

        displayText.push("4");

    }
    
    display.textContent = displayText.join("");
}

function threeDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [3];
        
    }
    else {

        displayText.push("3");

    }
    
    display.textContent = displayText.join("");
}

function twoDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [2];
        
    }
    else {

        displayText.push("2");

    }
    
    display.textContent = displayText.join("");
}

function oneDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [1];
        
    }
    else {

        displayText.push("1");

    }
    
    display.textContent = displayText.join("");
}

function decimalDigit() {

    for (let i = 0; i < displayText.length ; i++) {
        if (displayText[i] == '.'){
            return;
        }
        if (displayText[i] == 'e'){
            displayText = [0];
        }
    }

    displayText.push(".");
    
    display.textContent = displayText.join("");
}

function zeroDigit() {

    if (displayText.length == 1 && displayText[0] == '0') {

        displayText = [0];
        
    }
    else {

        displayText.push("0");

    }
    
    display.textContent = displayText.join("");
}

clear.addEventListener('click', clearScreen);
sign.addEventListener('click', changeSign);
percentage.addEventListener('click', percent);

nine.addEventListener('click', nineDigit);
eight.addEventListener('click', eightDigit);
seven.addEventListener('click', sevenDigit);
six.addEventListener('click', sixDigit);
five.addEventListener('click', fiveDigit);
four.addEventListener('click', fourDigit);
three.addEventListener('click', threeDigit);
two.addEventListener('click', twoDigit);
one.addEventListener('click', oneDigit);
zero.addEventListener('click', zeroDigit);
decimal.addEventListener('click', decimalDigit);


