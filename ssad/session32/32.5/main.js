let todolist = [
  { id: 1, task: "hoc dom js" },
  { id: 2, task: "lam bai tap dom js" },
  { id: 3, task: "on lai kien thuc dom js" },
];

function showlist() {
  // lay ra the ul
  let ul = document.getElementById("myUL");

  // cap nhap lai the ul
  ul.innerHTML = "";

  todolist.forEach((element) => {
    // tao the li them noi dung them class va them vao ul
    let li = document.createElement("li");
    li.textContent = element.task;
    li.classList.add("item");
    ul.appendChild(li);

    // tao the span close gan class va dau X cung voi them vao the li
    let span = document.createElement("span");
    span.textContent = "X";
    span.classList.add("close");
    li.appendChild(span);

    // click span close
    span.addEventListener("click", () => {
      todolist = todolist.filter((member) => {
        return member.id != element.id;
      });
      showlist();
    });
  });
}
showlist();

// ham ap dung de them noi dung vao
function addItem() {
  let input = document.getElementById("nhap");
  let add = document.getElementById("add");

  add.addEventListener("click", () => {
    let content = input.value;
    if (content != "") {
      let ob = {};
      ob.id = Math.round(Math.random()*100000000000);
      ob.task = content;
      todolist.push(ob);
      input.value = "";
      showlist();
    }
  });
}

addItem();
