const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const player1_DiceShowcase = document.getElementById("diceShowcase");
const player2_DiceShowcase = document.getElementById("diceShowcase_2");
const diceRomanNumerals = ["I", "II", "III", "IV", "V", "VI"];

diceShowcaseUpdate()

function diceShowcaseUpdate(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    const randomNumber = getRandomDice();
    player1_DiceShowcase.value = diceRomanNumerals[randomNumber];
}

function cellClicked(){
    if (this.textContent == "") {
        const randomNumber = player1_DiceShowcase.value;
        this.textContent = randomNumber;
        const randomNumber_2 = getRandomDice();
        player1_DiceShowcase.value = diceRomanNumerals[randomNumber_2];
    } 
    
}

function getRandomDice(){
    return Math.floor(Math.random() * diceRomanNumerals.length)
}