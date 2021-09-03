"use strict";

window.addEventListener("DOMContentLoaded", init);

const model = [5, 10, 30, 17, 22, 14, 5, 8, 19, 25, 17, 10, 8, 11, 22, 32, 6, 13, 10, 12, 28, 20, 22, 29, 18, 10, 15, 16, 12, 4, 3, 6, 16, 26, 27, 30, 16, 14, 7, 2];

function init() {
  console.log("init");

  loop();
}

function loop() {
  console.log("loop");
  displayData();
  modifyModel();
  setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
  console.log("Number of customers");

  return Math.floor(Math.random() * 32);
}

function displayData() {
  console.log("displayData");

  for (let i = 0; i <= 39; i++) {
    console.log(i);
    const bar = document.querySelector(".bar");
    bar.style.height = (model[i] / 32) * 100 + "%";
    console.log(bar.style.height);
    document.querySelector(".bars").append(bar);
  }
}

function modifyModel() {
  console.log("modifyModel");

  const customersInQueue = getNumberOfCustomers();
  model.shift();
  model.push(customersInQueue);
}
