import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

const deactivationPlayer = () => {
  temp.style.display = "none";
  playerBtn.forEach((item) => item.classList.remove("active"));
  playerBlock.forEach((item) => item.classList.remove("active"));
};

playerBtn.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    deactivationPlayer();
    btn.classList.add("active");
    playerBlock[i].classList.add("active");
  })
);

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();

/* 

Мне нужно узнать, у какого плеера сейчас стоит класс active 

Потом мне надо ставить на паузу те плееры, которые были запущены на момент смены класса

и желательно это сделать в одном документе, а не в каждом

*/
