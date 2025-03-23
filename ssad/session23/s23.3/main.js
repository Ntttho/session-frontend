let arr = [];
let t = parseInt(prompt(`nhap vao so luong phan tu cua mang`));
for (var i = 0; i < t; i++) {
  arr[i] = parseInt(prompt(`nhap phan tu thu ${i} cua mang`));
}
let count = 0;
for(var i = 0; i< t; i++){
    if(arr[i] < 0){
        count++;
    }
}
console.log(arr);
console.log(`so phan tu am la ${count}`);


