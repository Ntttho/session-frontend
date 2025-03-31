let body = document.getElementsByTagName("body")[0];
let button = document.getElementById("button");
let icon = document.getElementById("icon");
let modal = document.getElementsByClassName("modal")[0];

button.addEventListener("click", function () {
  modal.classList.add("show");
});
icon.addEventListener("click", function () {
  modal.classList.remove("show");
});
