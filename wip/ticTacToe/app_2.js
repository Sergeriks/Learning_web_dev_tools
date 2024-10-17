const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const player1_DiceShowcase = document.getElementById("diceShowcase");
const player2_DiceShowcase = document.getElementById("diceShowcase_2");
const diceRomanNumerals = ["I", "II", "III", "IV", "V", "VI"];

diceShowcaseUpdate()

function diceShowcaseUpdate(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    const randomNumber = getRandomDice();
    player1_DiceShowcase.textContent = diceRomanNumerals[randomNumber];
}

function getRandomDice(){
    return Math.floor(Math.random() * diceRomanNumerals.length)
}