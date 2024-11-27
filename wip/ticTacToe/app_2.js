const player1Cells = document.querySelectorAll("#cellContainer .cell");
const player2Cells = document.querySelectorAll("#cellContainer_2 .cell");
const player1_DiceShowcase = document.getElementById("diceShowcase");
const player2_DiceShowcase = document.getElementById("diceShowcase_2");
const diceRomanNumerals = ["I", "II", "III", "IV", "V", "VI"];
let currentTurn = 1;

// Initialize both players' dice showcases
diceShowcaseUpdate(player1_DiceShowcase)
diceShowcaseUpdate(player2_DiceShowcase)

// Event listeners for each player's cells
    player1Cells.forEach(cell => cell.addEventListener("click", () => cellClicked(cell, 1, player1_DiceShowcase)));
    player2Cells.forEach(cell => cell.addEventListener("click", () => cellClicked(cell, 2, player2_DiceShowcase)));


function diceShowcaseUpdate(diceShowcaseM){
    const randomNumber = getRandomDice();
    diceShowcaseM.value = diceRomanNumerals[randomNumber];
}

function cellClicked(cell, player, diceShowcase){
    
    if (currentTurn !== player) {
        alert(`It's Player ${currentTurn}'s turn!`);
        return;
    }

    if (cell.textContent === "") {
        cell.textContent = diceShowcase.value;

        diceShowcaseUpdate(diceShowcase);
        updateTurn();
    }
    
}

function getRandomDice(){
    return Math.floor(Math.random() * diceRomanNumerals.length);
}

function updateTurn() {
    currentTurn = currentTurn === 1 ? 2 : 1;
    
}