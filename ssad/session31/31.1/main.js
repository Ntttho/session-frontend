let text = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  text.style.display = "block";
});
btn1.addEventListener("click", function () {
  text.style.display = "none";
});
