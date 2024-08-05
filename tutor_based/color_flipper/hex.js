const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const def_color = "#a9a9a9";
const logo_btn = document.getElementById("refresh");
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
let hexColor = "#";
for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

logo_btn.addEventListener('click', function(){
    defaultColorTrigger();
    color.textContent = def_color;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

function defaultColorTrigger(){
    document.body.style.backgroundColor = def_color;
}