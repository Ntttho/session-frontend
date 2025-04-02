let arr = [
  { id: 1, name: "element" },
  { id: 1, name: "element" },
  { id: 1, name: "element" },
  { id: 1, name: "element" },
];
xoa(arr);

function xoa(list) {
  let ul1 = document.querySelector("ul#list");
  let li_ul = ul1.querySelectorAll("li");
  console.log(ul1);
  console.log(li_ul);

  let xoa = document.querySelectorAll(".xoa");
  console.log(xoa);
  for(let i = 0; i<xoa.length; i++){
    xoa[i].addEventListener(("click"), ()=>{
      ul1.removeChild(li_ul[i]);
    } )
  }
}
