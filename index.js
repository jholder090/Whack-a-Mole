const startButton = document.querySelector("#startbutton")

const mole = document.querySelector(".mole");
const mole1 = document.querySelector("#mole1");
const mole2 = document.querySelector("#mole2");
const mole3 = document.querySelector("#mole3");
const mole4 = document.querySelector("#mole4");
const mole5 = document.querySelector("#mole5");
const mole6 = document.querySelector("#mole6");
const mole7 = document.querySelector("#mole7");
const mole8 = document.querySelector("#mole8");
const mole9 = document.querySelector("#mole9");


// const moleArray = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9]

//num const outside of function so it doesn't change after starting click.
const num = Math.floor(Math.random() * (9 - 1 + 1) + 1);
//moleAppear so we can use it for next function
const moleAppear = document.querySelector(`#mole${num}`);
//Display random mole corresponding to random number upon start; change it from display:none to :flex
startButton.addEventListener('click', function () {
    console.log(num);
    document.querySelector(`#mole${num}`).style.display = "flex";
});

// ---------Alternate sol'n to starting click, not working-------------------
// function startGame() {
//     const num = Math.floor(Math.random() * (9 - 1 + 1) + 1);
//     console.log(num);
//     document.querySelector(`#mole${num}`).style.display = "flex";
// }

// startButton.addEventListener('click', startGame())


//moleClick: clears old mole and gens new mole
moleAppear.addEventListener('click', function() {
    const newNum = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    console.log(newNum);
    moleAppear.style.display = "none";
    document.querySelector(`#mole${newNum}`).style.display = "flex";
//     moleClick();

// });

// function moleClick() {

// }

