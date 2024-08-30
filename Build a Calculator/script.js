// Get reference to the display
const display = document.getElementById('display');

// Append value to the display
function inputValue(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character on the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculateResult() {
    try {
        // Evaluate the arithmetic expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
