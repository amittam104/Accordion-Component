"use strict";

// Variables
const open1El = document.querySelector(".icon-open--1");
const open2El = document.querySelector(".icon-open--2");
const open3El = document.querySelector(".icon-open--3");
const open4El = document.querySelector(".icon-open--4");
const close1El = document.querySelector(".icon-close--1");
const close2El = document.querySelector(".icon-close--2");
const close3El = document.querySelector(".icon-close--3");
const close4El = document.querySelector(".icon-close--4");
const answer1El = document.querySelector(".answer--1");
const answer2El = document.querySelector(".answer--2");
const answer3El = document.querySelector(".answer--3");
const answer4El = document.querySelector(".answer--4");

const openClose1 = function () {
  answer1El.classList.toggle("hidden");
  open1El.classList.toggle("hidden");
  close1El.classList.toggle("hidden");
};
const openClose2 = function () {
  answer2El.classList.toggle("hidden");
  open2El.classList.toggle("hidden");
  close2El.classList.toggle("hidden");
};
const openClose3 = function () {
  answer3El.classList.toggle("hidden");
  open3El.classList.toggle("hidden");
  close3El.classList.toggle("hidden");
};
const openClose4 = function () {
  answer4El.classList.toggle("hidden");
  open4El.classList.toggle("hidden");
  close4El.classList.toggle("hidden");
};

open1El.addEventListener("click", openClose1);
open2El.addEventListener("click", openClose2);
open3El.addEventListener("click", openClose3);
open4El.addEventListener("click", openClose4);
close1El.addEventListener("click", openClose1);
close2El.addEventListener("click", openClose2);
close3El.addEventListener("click", openClose3);
close4El.addEventListener("click", openClose4);
