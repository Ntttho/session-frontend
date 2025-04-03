let btn = document.getElementById("btn");
let p = document.getElementById("check");
let string = document.getElementById("content");

btn.addEventListener("click", () => {
  let S = string.value;
  let number = S.split("").length;
  console.log(number);
  p.textContent = `${number} ky tu`
});
