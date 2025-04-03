let dish = [
  { name: "rau sach", category: "do an" },
  { name: "thit lon", category: "do an" },
  { name: "pepsi khong calo", category: "nuoc" },
  { name: "cocacola", category: "nuoc" },
  { name: "co le", category: "dung cu" },
  { name: "tuy vit", category: "dung cu" },
];
const select = document.getElementById("mySelect");

function showListByCategory() {
  // lay ra button loc
  let loc = document.getElementById("loc");
  // lay ra the ul
  let ul = document.getElementById("myUL");
    ul.innerHTML = "";
  dish.forEach((Element) => {
    ul.innerHTML += `<li><b>ten:</b> ${Element.name} - <b>Danh muc:</b> ${Element.category}</li>`;
  });

  loc.addEventListener("click", () => {
    let category = select.options[select.selectedIndex].value;
    ul.innerHTML = "";
    if (category !== "danh muc") {
      let list = dish.filter((Element) => {
        return category === Element.category;
      });

      list.forEach((Element) => {
        ul.innerHTML += `<li><b>ten:</b> ${Element.name} - <b>Danh muc:</b> ${Element.category}</li>`;
      });
    } else {
        showListByCategory();
    }
  });
}
showListByCategory();
