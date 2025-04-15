let listcount = JSON.parse(localStorage.getItem("count"))
listcount = [0,0,0]
console.log(listcount);

function showLike(list){
    let p = document.getElementsByTagName("p")
    let btn = document.getElementsByTagName("button")
    list.forEach((Element,index) =>{
        p[index].innerHTML = ""
        html = `<span>icon</span> ${Element} luot thich`
        p[index].innerHTML = html;

        btn[index].addEventListener("click", ()=>{
            list[index] +=1;
            localStorage.setItem("count",JSON.stringify(listcount))
            showLike(listcount)
        })
    })
}
showLike(listcount)