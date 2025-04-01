let divanh = document.getElementsByClassName("divanh");

for (let i = 0; i < divanh.length; i++) {
  divanh[i].addEventListener("click", () => {
    alert("oke");
    divanh[i].classList.toggle("position");
  });
}
