let cong = document.getElementById("cong")
let tru = document.getElementById("tru")
let text = document.getElementById("change")

let size = 17;
let minsize = 10;
let maxsize = 100;
cong.addEventListener("click", function(){
    if(size < maxsize){
        size += 5;
        text.style.fontSize = `${size}px`;
    }
});
tru.addEventListener("click", function(){
    if(size>minsize){
        size -= 5;
        text.style.fontSize = `${size}px`;
    }
})






