const display = document.getElementById("display"); // Get reference to the display element

function appendToDisplay(input) {
    display.value += input; // Append the input value to the display
}

function clearDisplay() {
    display.value = ""; // Clear the display
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression in the display and set the result
    }
    catch(error) {
        display.value = "Error"; // Handle any errors and display "Error"
    }
}

