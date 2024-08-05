const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const def_color = "#a9a9a9";
const logo_btn = document.getElementById("refresh");
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

logo_btn.addEventListener('click', function(){
    defaultColorTrigger();
    color.textContent = def_color;
});

btn.addEventListener('click',function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

function defaultColorTrigger(){
    document.body.style.backgroundColor = def_color;
}