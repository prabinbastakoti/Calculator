

function add(firstNumber, secondNumber) {
    if(firstNumber == 'Error') {
        displayValue = "Error";
        return displayValue;
    }
    return (firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
    if(firstNumber == 'Error') {
        displayValue = "Error";
        return displayValue;
    }
    return (firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    if(firstNumber == 'Error') {
        displayValue = "Error";
        return displayValue;
    }
    return (firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    if(firstNumber == 'Error') {
        displayValue = "Error";
        return displayValue;
    }
    if (secondNumber == '0') {
        displayValue = "Error";
        return displayValue;
    }
    return (firstNumber / secondNumber);
}

function operate(firstNumber, secondNumber, operation) {

    if (operation == 'add') {
        return add(firstNumber, secondNumber);
    }

    else if (operation == 'subtract') {
        return subtract(firstNumber, secondNumber);
    }

    else if (operation == 'multiply') {
        return multiply(firstNumber, secondNumber);
    }

    else {
        return divide(firstNumber, secondNumber);
    }

}

let displayValue = 0;

let firstNumber, secondNumber, operation;

const display = document.querySelector('.display-screen');

display.textContent = displayValue;

const numbers = Array.from(document.querySelectorAll(".number"));

const operations = Array.from(document.querySelectorAll(".operation"));

const equal = document.querySelector('.equal-sign');

const clear = document.querySelector('.clear');

const decimal = document.querySelector('.decimal');


function populateDisplay(e) {
    
    if (displayValue.length >= 9) {
        // Do nothing
    }

    else {

        if (numbers.includes(e.target)) {

            if (displayValue == '0') {
                displayValue = e.target.textContent;
                display.textContent = Number(displayValue).toLocaleString('en-IN');
            }
            else {
                displayValue = displayValue + e.target.textContent;
                display.textContent = Number(displayValue).toLocaleString('en-IN');
            }
        }
    }

    if (operations.includes(e.target)) {

        if(!firstNumber) {
            firstNumber = Number(displayValue);
            displayValue = 0;
        }
        else {
            secondNumber = Number(displayValue);
            displayValue = 0;
        }

        if (e.target.textContent == '+') {
            if (!operation) {
                operation = 'add';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                if(displayValue == 'Error') {
                    display.textContent = displayValue;
                }
                else {
                    display.textContent = Number(displayValue).toLocaleString('en-IN');
                    firstNumber = Number(displayValue);
                }
                firstNumber = displayValue;
                displayValue = 0;
                secondNumber = 0;
                operation = 'add';
            }

        }
        else if (e.target.textContent == '-') {
            if (!operation) {
                operation = 'subtract';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                if(displayValue == 'Error') {
                    display.textContent = displayValue;
                }
                else {
                    display.textContent = Number(displayValue).toLocaleString('en-IN');
                    firstNumber = Number(displayValue);
                }
                firstNumber = displayValue;
                displayValue = 0;
                secondNumber = 0;
                operation = 'subtract';
            }
        }
        else if (e.target.textContent == '×') {
            if (!operation) {
                operation = 'multiply';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                if(displayValue == 'Error') {
                    display.textContent = displayValue;
                }
                else {
                    display.textContent = Number(displayValue).toLocaleString('en-IN');
                    firstNumber = Number(displayValue);
                }
                firstNumber = displayValue;
                displayValue = 0;
                secondNumber = 0;
                operation = 'multiply';
            }
        }
        else {
            if (!operation) {
                operation = 'divide';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                if(displayValue == 'Error') {
                    display.textContent = displayValue;
                }
                else {
                    display.textContent = Number(displayValue).toLocaleString('en-IN');
                    firstNumber = Number(displayValue);
                }
                firstNumber = displayValue;
                displayValue = 0;
                secondNumber = 0;
                operation = 'divide';
            }
        }

    }

    if (e.target == equal) {

        if(!firstNumber) {
            return;
        }

        if(!secondNumber) {
            secondNumber = Number(displayValue);
        }
        

        displayValue = operate(firstNumber, secondNumber, operation);

        if (displayValue.toString().length > 9){
            display.textContent = displayValue.toExponential(3);
        }
        else {
            display.textContent = Number(displayValue).toLocaleString('en-IN');
        }

        if (displayValue == 'Error') {
            firstNumber = displayValue;
        }
        else {
            firstNumber = Number(displayValue);
        }
        displayValue = 0;
    }

    if (!(displayValue == 0)){
        clear.textContent = "C";
    } 

    if (e.target == clear) {
        firstNumber = undefined;
        secondNumber = undefined;
        operation = undefined;
        displayValue = 0;
        display.textContent = displayValue;
        clear.textContent = "AC";
    }

    if (e.target == decimal) {

        let number;

        if (displayValue == 0) {
            number = [0];
        }
        else {
            number = Array.from(displayValue);
        }
        
        for (let i = 0; i < number.length; i++) {
            if (number[i] == '.') {
                return;
            }
            if (number[i] == 'e') {
                number = [0];
            }
        }
        number.push('.');
        displayValue = number.join('');
        display.textContent = displayValue;
    }
}

window.addEventListener('click', populateDisplay);

