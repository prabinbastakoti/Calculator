
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