// Get the display element by its ID
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input; // Append the input to the current value of the display
}

// Function to clear the display
function clearDisplay() {
    display.value = ""; // Clear the value of the display
}

// Function to evaluate and display the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression and display the result
    } catch(error) {
        display.value = "Error"; // If there's an error, display "Error" on the display
    }
}

