const a = prompt("Enter The First Number >>> ",0) - 0;

const b = prompt("Enter The Operator >>> ", '+');

const c = prompt("Enter The Second Number >>> ", 0) - 0;




// Add two items
const add = function(a , b) {
    return (a + b);
}

// Subtract two items
const subtract = function(a , b) {
    return a - b;
}

// Multiply two items
const multiply = function(a , b) {
    return a * b;
}

// Divide two items
const divide = function(a , b) {
    return a / b;
}


if (b === '+') {
    alert(add(a,c));
} 
else if (b === '-') {
    alert(subtract(a,c));
} 
else if (b === '*') {
    alert(multiply(a,c));
} 
else if (b === '/') {
    alert(divide(a,c));
} 
else {
    alert("Something Wrong! Please Try Again Later.");
}