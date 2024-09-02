// Calculator program

const display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];

function appendToDisplay(input){
    if (display.value == "Error") {
        display.value = "";
    }

    // Check if the last character is an operator
    const lastChar = display.value[display.value.length - 1];
    if (operators.includes(input)) {
        if (operators.includes(lastChar)) {
            // Replace the last operator with the new one
            display.value = display.value.slice(0, -1) + input;
        } else {
            // Append the operator if last character is not an operator
            display.value += input;
        }
    } else {
        // Append the input if it's not an operator
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}