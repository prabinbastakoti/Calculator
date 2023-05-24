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

    if (!(displayText.length == 1 && displayText[0] == '0')) {

        clear.textContent = "C";
        
    }
    else {

        clear.textContent = "AC";

    }


    if (displayText.length >= 9) {

        if (displayText[0] != '-') {

            display.textContent = displayText.slice(0,9).join('');
        }
    }

    if (displayText.length > 10) {
        let newValue = Number(displayText.join('')).toExponential(3);
        displayText = [newValue];
        displayText = displayText.toString().split('');
        display.textContent = displayText.join('');
    }
    else {
        display.textContent = displayText.join('');
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

    // Add '-' at the beginning

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


// ALgorithm For Percentage 

function percent() {

    let value = ((Number(displayText.join(""))) / 100);
    displayText = [value];
    displayText = displayText.toString().split('');

}


clear.addEventListener('click', clearScreen);
sign.addEventListener('click', changeSign);
percentage.addEventListener('click', percent);