let input = document.getElementById("input");
let eye = document.getElementById("i");

eye.addEventListener("click", () => {
  let type = input.getAttribute("type") === "text" ? "password" : "text";
  input.setAttribute("type", type);
});
