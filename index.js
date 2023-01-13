let randomNumber1 = Math.floor(Math.random()*(7-1)+1);
let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
const img1 = document.querySelector(".img1");
img1.src = `./images/dice${randomNumber1}.png`;
const img2 = document.querySelector(".img2");
img2.src = `./images/dice${randomNumber2}.png`;
const h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "⛳️ Player 1 Wins";
    }else if(randomNumber1 < randomNumber2){
    h1.innerHTML = "Player 2 Wins ⛳️";
    }else if(randomNumber1 === randomNumber2){
    h1.innerHTML = "Draw!";
}