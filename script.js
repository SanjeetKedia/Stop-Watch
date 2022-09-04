"use strict";
// Buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

// Watch
const watch = document.querySelector(".watch");

let isPlaying = false;
let timer;

// Start Logic
startBtn.addEventListener("click", function () {
  if (isPlaying) return;
  timer = setInterval(() => {
    const time = watch.textContent.split(":");
    let minutes = time[0];
    let seconds = time[1];

    seconds++;
    if (seconds > 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 0 && minutes <= 9) {
        minutes = `0${minutes}`;
      }
    }

    if (seconds >= 0 && seconds <= 9) {
      seconds = `0${seconds}`;
    }

    const newTime = [minutes, seconds].join(":");
    watch.textContent = newTime;
  }, 1000);

  isPlaying = true;
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
  isPlaying = false;
});

resetBtn.addEventListener("click", function () {
  if (isPlaying) return;
  watch.textContent = "00:00";
});
