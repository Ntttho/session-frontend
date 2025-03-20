let t = 10;
let arr = new Array(t);
for (var i = 0; i < t; i++) {
  arr[i] = Math.ceil(Math.random() * 100);
}
console.log(`mang truoc khi thay doi`);
console.log(arr);
for (var i = 0; i < t; i++) {
  for (var j = i + 1; j < t; j++) {
    if (arr[j] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
