let btn = document.getElementById("change");
let box = document.getElementById("box");

btn.addEventListener("click", function(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
})