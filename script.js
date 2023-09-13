"use strict";

const btn = document.querySelector(".share-btn");

btn.addEventListener("click", () => {
  document.querySelector(".hidden-container").classList.toggle("hidden");
});
