
// This is our initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");

// btns == buttons
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});