let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet george",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];
let ul = document.getElementById("myUL");

let listUL = document.getElementsByTagName("ul");
let listLi = document.getElementsByTagName("li");
let X = document.getElementsByClassName("close"); // htmlcolection

let add = document.getElementsByClassName("addBtn");
for (let i = 2; i < todoList.length; i++) {
  ul.innerHTML += `<li>${todoList[i].task}<span class="close">X</span></li>`;
}
add[0].addEventListener("click", function () {
  let input = document.getElementById("myInput");
  let content = input.value;
  console.log(content);
  if (content !== "") {
    let ob = {};
    ob.id = todoList.length + 1;
    ob.task = content;
    ob.completed = false;
    todoList.push(ob);
    ul.innerHTML += `<li>${ob.task}<span class="close">X</span></li>`;
    console.log(todoList);
    input.value = ""; // reset cho o input la thanh khong co gia tri gi
  }
});
