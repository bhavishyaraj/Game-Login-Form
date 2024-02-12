"use strict";

// SlideShow

const counter1 = document.querySelector(".counter-1");
const dots = document.querySelector(".dots");
const imgs = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

dots.addEventListener("click", () => {
  clearTimeout(timeout);
  currentImg++;
  updateImg();
});

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }

  counter1.style.transform = `translateX(-${(currentImg - 1) * 537}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
updateImg();
