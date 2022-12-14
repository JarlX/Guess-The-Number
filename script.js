"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Doğru Tahmin!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretnumber = Math.trunc(Math.random() * 20) + 1; // trunc ondalık ifadeyi atar

let score = 20;
let bestscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Sayı girmediniz!";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🥳 Tebrikler!";
    document.querySelector(".number").textContent = secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".check").ariaDisabled = true;
    document.querySelector(".check").style.backgroundColor = "#ccc";

    if (score > bestscore) {
      bestscore = score;
      document.querySelector(".highscore").textContent = bestscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretnumber
          ? "❕ Yüksek sayı girdiniz!"
          : "❕ Düşük sayı girdiniz!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Kaybettiniz!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  bestscore = bestscore;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Tahmin etmeye başla..";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = bestscore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").ariaDisabled = false;
  document.querySelector(".check").style.backgroundColor = "#eee";
  document.querySelector(".number").textContent = "?";
});
