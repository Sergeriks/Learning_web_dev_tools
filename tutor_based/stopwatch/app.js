
// All of the variables.
const display = document.getElementById("display");
let timer = null;
let starTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){

    if(!isRunning){
        starTime = Date.now() - elapsedTime;
        // Updates timer every 10ms.
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - starTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    timer = null;
    starTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

// A function to update the display.
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - starTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0)");
    minutes = String(minutes).padStart(2, "0)");
    seconds = String(seconds).padStart(2, "0)");
    milliseconds = String(milliseconds).padStart(2, "0)");
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}