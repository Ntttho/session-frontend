function minOfArray(arr) {
  if (!Array.isArray(arr)) {
    return "gia tri khong hop le";
  }
  if (arr.length === 0) {
    return "mang khong chua phan tu nao!";
  }
  let min = arr[0];
  for (let member of arr) {
    if (member <  min) {
      min = member;
    }
  }
  return `gia tri nho nhat trong mang la ${min}`;
}
let arr = [];
for(let i = 0; i<5; i++){
    arr[i] = Number(prompt(`nhap vao pha tu thu ${i}`));
}
let result = minOfArray(arr);
console.log(result);
