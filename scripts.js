const mainMenu = document.getElementById("main-menu");
const button = document.querySelector(".button-show");
const mainContainer = document.querySelector(".main-container");

button.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
mainContainer.addEventListener("click", () => {
  console.log("hello world");
  mainMenu.classList.add("hidden");
});
