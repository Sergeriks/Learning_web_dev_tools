// All of the variables.
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const timerDisplay = document.getElementById("timerDisplay");

let timerInterval = null;
let isRunning = false;
let elapsedTime = 0;
let remainingTime = 0;

// Function to start the timer
function start() {
    if (isRunning) return;  // Prevent multiple intervals

    if (remainingTime > 0) {
        // Resume from where we left off if the timer was stopped
        elapsedTime = remainingTime;
    } else {
        // Get user input for hours, minutes, and seconds
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;

        // Convert input to milliseconds
        elapsedTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
    }

    // Hide input fields and show the timer display
    document.getElementById("textBox_input").style.display = "none";
    timerDisplay.style.display = "block";

    // Update the timer every second
    isRunning = true;
    timerInterval = setInterval(update, 1000);
}

// Function to update the timer display
function update() {
    if (elapsedTime <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "00:00:00";
        isRunning = false;
        return;
    }

    elapsedTime -= 1000;
    remainingTime = elapsedTime;  // Update remaining time

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Update the display with the current time
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
 }

// Function to stop the timer
function stop() {
    clearInterval(timerInterval);
    isRunning = false;
    // remainingTime keeps track of how much time is left
}

        // Function to reset the timer
function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    remainingTime = 0;

    // Show the input fields again and hide the timer display
    document.getElementById("textBox_input").style.display = "block";
    timerDisplay.style.display = "none";

    // Clear input fields
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
}