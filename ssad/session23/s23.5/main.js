let arr = [];
let t = Number(prompt(`nhap vao so phan tu cua mang`));
for (var i = 0; i < t; i++) {
  arr[i] = prompt(`nhap vao phan tu thu ${i} cua mang`);
}
let result = [];
let count = 0;
for (var i = 0; i < t; i++) {
  if (!isNaN(Number(arr[i]))) {
    result[count] = arr[i];
    count++;
  }
}
if (count != 0) {
    let sum = 0;
  for(var i= 0; i<count; i++){
    sum += Number(result[i]);
  }
  console.log("tong cac phan tu la so: "+sum);
  
} else {
  console.log("khong co phan tu nao la so");
}
