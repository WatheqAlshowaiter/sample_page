// Responsive navbar
const menu = document.querySelector(".menu");
const ul = document.querySelector("#home > div > header > div.navbar > ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
  console.log("toggle");
});
