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
    player1Cells.forEach((cell, index) =>
        cell.addEventListener("click", () => cellClicked(cell, 1, player1_DiceShowcase, index)));
    player2Cells.forEach((cell, index) =>
        cell.addEventListener("click", () => cellClicked(cell, 2, player2_DiceShowcase, index)));


function diceShowcaseUpdate(diceShowcaseM){
    const randomNumber = getRandomDice();
    diceShowcaseM.value = diceRomanNumerals[randomNumber];
}

function cellClicked(cell, player, diceShowcase, index){
    
    if (currentTurn !== player) {
        return;
    }

    if (cell.textContent === "" && isValidMove(player, index)) {
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

function isValidMove(player, index) {
    // Define valid rows for each player
    const baseRow = player === 1 ? [6, 7, 8] : [0, 1, 2];
    const middleRow = [3, 4, 5];
    const topRow = player === 1 ? [0, 1, 2] : [6, 7, 8];
  
    // Check if the cell belongs to the base row
    if (baseRow.includes(index)) {
      return true; // Always valid to place at the base row
    }
  
    // Check if the cell belongs to the middle row
    if (middleRow.includes(index)) {
      const belowIndex = player === 1 ? index + 3 : index - 3; // The cell directly below in the same column
      const belowCell = player === 1 ? player1Cells[belowIndex] : player2Cells[belowIndex];
      return belowCell.textContent !== ""; // Valid if the below cell is filled
    }
  
    // Check if the cell belongs to the top row
    if (topRow.includes(index)) {
      const belowIndex = player === 1 ? index + 3 : index - 3; // The cell directly below in the same column
      const belowCell = player === 1 ? player1Cells[belowIndex] : player2Cells[belowIndex];
      return belowCell.textContent !== ""; // Valid if the below cell is filled
    }
  
    return false; // Invalid move otherwise
  }