// Viết chương trình khai báo mảng số nguyên gồm 10 phần tử cho sẵn.
// Tiến hành loại bỏ những phần tử trùng nhau trong mảng
// hiển thị kết quả mảng sau khi đã loại bỏ phần tử trùng nhau theo thứ tự tăng dần.

let t = 10;
let arr = new Array(t);
for (var i = 0; i < t; i++) {
  arr[i] = Math.ceil(Math.random() * 10);
}
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
let newArray = [];
newArray[0] = arr[0];
let count = 1;
for (var i = 1; i < arr.length - 1; i++) {
  if (arr[i] != arr[i + 1]) {
    newArray[count] = arr[i + 1];
    count++;
  }
}
console.log(newArray);
