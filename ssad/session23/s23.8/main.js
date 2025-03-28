let array = [];
let size = Number(prompt("nhap vao so phan tu cua mang"));
for (let i = 0; i < size; i++) {
  array[i] = Number(prompt(`nhap vao gia tri cua phan tu ${i}`));
}

if (size < 3) {
  console.log("day nay chinh la day fibonacci");
}else{
    let check = true;
    for(let i in array){
        if(i>2){
            if(array[i] === array[i-1] + array[i-2]){
                continue;
            }else{
                check = false;
                break;
            }
        }
    }
    if(check){
        console.log("day nay la day fibonacci");
    }else{
        console.log("day nay khong phai la day fibonacci");
    }
}
