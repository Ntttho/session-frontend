let listSubject = [
  { id: 1, name: "toan" },
  { id: 2, name: "ly" },
  { id: 3, name: "hoa" },
];
showlist(listSubject);
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const inputElement = document.getElementById("myinput"); // Lấy phần tử input bằng id
  if (inputElement.value !== "") {
    let ob = {};
    ob.id = listSubject.length + 1;
    ob.name = inputElement.value;
    listSubject.push(ob);
    console.log(listSubject);
    showlist(listSubject);

    inputElement.value = ""; // reset oo input
  }
});

function showlist(arr) {
  let div = document.getElementById("list");
  div.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    div.innerHTML += `${arr[i].id}: ${arr[i].name}<br/>`;
  }
}
