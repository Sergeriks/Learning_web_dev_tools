
// This is our initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");

// btns == buttons
const btns = document.querySelectorAll(".btn");



btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        let changeText = "";
        if (styles.contains('decrease')){
            count--;
            changeText = "-1";
        }
        else if (styles.contains('increase')){
            count++;
            changeText = "+1";
        }
        else{
            count=0;
            changeText = "Reset"
        }
        if (count > 0){
            value.style.color = "lime";
        }
        if (count < 0){
            value.style.color = "pink";
        }
        if (count == 0){
            value.style.color = "azure";
        }
        value.textContent = count;

        // Causes the 'bouncy' animation to play
        value.classList.remove('scale-down-up');
        void value.offsetWidth;
        value.classList.add('scale-down-up');

        // Additional number effects
        const effect = document.createElement('span');
        effect.textContent = changeText;
        effect.classList.add('fade-numerics');

        // Effects the positioning/offset of effects that appear on-screen
        const randomOffsetX = (Math.random() * 45) - 20;
        const randomOffsetY = (Math.random() * 45) - 20;
        effect.style.top = `calc(50% + ${randomOffsetY}px)`;
        effect.style.left = `calc(50% + ${randomOffsetX}px)`;

        // Ensures all the number effects appear within the container
        document.querySelector('.container').appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 1000);

    });
});