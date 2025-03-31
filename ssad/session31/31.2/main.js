let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", function () {
  btn.classList.toggle("class2");
  btn.classList.toggle("class1");
  container.classList.toggle("class1");
});
