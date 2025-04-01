let toDoList = [
  { name: "hoc dom js" },
  { name: "lam bai tap dom js" },
];

showList(toDoList);

let add = document.getElementById("add")
add.addEventListener("click", function(){
    let infor = document.getElementById("input").value;
    if(infor !== ''){
        console.log(infor);
        let ob = {};
        ob.name = infor;
        toDoList.push(ob);
        showList(toDoList);
        document.getElementById("input").value = "";
    }

})



function showList(list) {
  let row = document.getElementById("item");
  row.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    row.innerHTML += `<div id="row"><div id="text">${list[i].name}</div><span id="close">X</span></div>`;
  }
}
