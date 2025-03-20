let num = prompt("nhap vao day so ");
if(num % 1 === 0){
    let arr = num.split("");
    let max = 0;
    for(var i =0 ; i<arr.length; i++){
        max = Math.max(max, arr[i]);
    }
    console.log(`so lon nhat trong day la: ${max}`);
} else {
    console.log("day khong hop le");
}