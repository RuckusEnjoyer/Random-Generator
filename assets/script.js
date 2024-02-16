//Random Number Generator
const numBtn = document.getElementById('num-btn');
const numOutput = document.getElementById('num-output');

function randomNumHandler() {
    let num = Math.floor(Math.random() * 1000)

    numOutput.innerHTML = num
}

//Listening for this button to be clicked
numBtn.addEventListener('click', randomNumHandler)