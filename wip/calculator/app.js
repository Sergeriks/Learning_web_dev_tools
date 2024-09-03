// Calculator program

const display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];

function appendToDisplay(input){
    if (display.value == "Error" || display.value == "Infinity") {
        display.value = "";
    }
    elif (display.value)
    // Check if the first character is an operator
    const firstChar = display.value[0];
    if (firstChar == operators[2] || firstChar == operators[3]){
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
        // Evaluate the expression inside display.value
        let result = eval(display.value);

        // Determine the maximum number of decimal places in the input
        const decimalParts = display.value.split(/[+\-*/]/).map(part => {
            const decimals = part.split('.')[1];
            return decimals ? decimals.length : 0;
        });
        const maxDecimals = Math.max(...decimalParts);

        // Adjust rounding based on the maximum number of decimals
        const adjustableNums = Math.pow(10, maxDecimals);
        let valueCorrected = Math.round(result * adjustableNums) / adjustableNums;

        // Display the result
        display.value = valueCorrected;
    }
    catch(error){
        display.value = "Error";
    }
    
}