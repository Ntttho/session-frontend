// let listCategory = [
//     { id: "DM001", name: "Quan ao", Status: "Dang hoat dong" },
//     { id: "DM002", name: "Kinh mat", Status: "Dang hoat dong" },
//     { id: "DM003", name: "Giay dep", Status: "Dang hoat dong" },
// ];

let listCategory = JSON.parse(localStorage.getItem("category-list"))



showlist();
function showlist() {
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    listCategory.forEach((Element, index) => {
        // tao the tr
        console.log(index);

        let tr = document.createElement("tr")

        // duyet qua tung phan tu cua element
        for (let member in Element) {
            // tao the td
            let td = document.createElement("td")

            if (member === "Status") {
                let ul = document.createElement("ul")
                let li = document.createElement("li")
                li.textContent = Element[member]
                if (Element[member] === "Dang hoat dong") {
                    td.classList.add("li-online");
                } else {
                    td.classList.add("Li-offline")
                }

                ul.appendChild(li)
                td.appendChild(ul)
            } else {
                td.textContent = Element[member]
            }

            // them td vao tr
            tr.appendChild(td);
        }

        let td = createTdButton()
        tr.appendChild(td)
        //them tr vao tbody
        tbody.appendChild(tr)

        // thao tac sua xoa
        let btnx = document.getElementsByClassName("trask")[index]
        let btns = document.getElementsByClassName("pencil")[index]
    })
}





// tao the td chua button sua va xoa
function createTdButton() {
    let td = document.createElement("td");
    let div = document.createElement("div")
    div.classList.add("gap-icon")
    div.classList.add("justify-content-s-a")

    let iX = document.createElement("i")
    let iS = document.createElement("i")
    iX.classList.add("fa-solid")
    iX.classList.add("fa-trash")
    iS.classList.add("fa-solid")
    iS.classList.add("fa-pencil")

    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    btn1.classList.add("trask")
    btn2.classList.add("pencil")
    btn1.appendChild(iX)
    btn2.appendChild(iS)
    btn1.style.color = "red"

    div.appendChild(btn1)
    div.appendChild(btn2)

    td.appendChild(div)

    return td;
}
addnewitem();
function addnewitem() {
    let btnAdd = document.getElementsByClassName("btn-add")[0];
    btnAdd.addEventListener("click", () => {
        let body = document.getElementsByTagName("body")[0]
        body.classList.toggle("color")
        let box = document.getElementsByClassName("them-moi")[0]
        box.classList.toggle("none")

        // lay noi dung tu input
        let form = document.getElementsByClassName("form")[0]
        let p1 = document.getElementsByClassName("p-none")[0]
        let p2 = document.getElementsByClassName("p-none")[1]
        p1.classList.remove("p-show")
        p2.classList.remove("p-show")
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            let ob = {}
            ob.id = form.id.value;
            ob.name = form.name.value;
            ob.Status = form.Status.value;

            if (ob.id !== "" && ob.name !== "" && ob.Status !== "") {
                listCategory.push(ob);
                let list = JSON.stringify(listCategory);
                localStorage.setItem("category-list", list)
                form.reset();
                let body = document.getElementsByTagName("body")[0]
                body.classList.toggle("color")
                let box = document.getElementsByClassName("them-moi")[0]
                box.classList.toggle("none")
                showlist();
            } else {
                form.reset();
                p1.classList.add("p-show")
                p2.classList.add("p-show")
            }
        })
    })
    let huy = document.getElementsByClassName("huy")[0]
    huy.addEventListener("click", () => {
        console.log("helo");
        let body = document.getElementsByTagName("body")[0]
        body.classList.toggle("color")
        let box = document.getElementsByClassName("them-moi")[0]
        box.classList.toggle("none")
    })
}
selectChange()
function selectChange(){
    let select = document.getElementsByTagName("select")[0]
    select.addEventListener("change", (event)=>{
        let Status = event.target.value
        console.log("askljf");
        listCategory = JSON.parse(localStorage.getItem("category-list"))
        listCategory = listCategory.filter((element =>{
            return Status === "Tat ca" || element.Status === Status
        }))
        showlist();
    })
}
findId()
function findId(){
    let input = document.getElementById("find");
    input.addEventListener("input",(event)=>{
        let id = event.target.value
        listCategory = JSON.parse(localStorage.getItem("category-list"))
        listCategory = listCategory.filter((element =>{
            return element["id"].includes(id)
        }))
        showlist()
    })
}