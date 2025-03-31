let container = document.getElementById("container");

console.log(container);
let red = document.getElementById("red");
let green = document.getElementById("green");
let purple = document.getElementById("purple");

red.addEventListener("click", function () {
  container.style.backgroundColor = "red";
});
green.addEventListener("click", function () {
  container.style.backgroundColor = "green";
});
purple.addEventListener("click", function () {
  container.style.backgroundColor = "purple";
});
