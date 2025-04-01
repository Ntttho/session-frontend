let arr = [
  { id: 1, name: "element" },
  { id: 1, name: "element" },
  { id: 1, name: "element" },
  { id: 1, name: "element" },
];
showlist(arr);
function showlist(list) {
  let div = document.getElementById("list");
  // while (div.firstChild) {
  //   console.log(div.firstChild);
  //   div.removeChild(div.firstChild);
  // }
  console.log(div);

  console.log(div.querySelectorAll("p"));

  let lists = div.querySelectorAll("p");

  for (let element of div.querySelectorAll("p")) {
    div.removeChild(element);
  }
  let p = document.createElement("p");
  div.appendChild(p);
  console.log(div.querySelectorAll("p"));
  console.log(div);
}
