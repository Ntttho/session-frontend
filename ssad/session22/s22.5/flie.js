var t = 5;
let arr = new Array(t);
let tongc = 0;
let tongl = 0;
for (var i = 0; i < t; i++) {
  arr[i] = Math.ceil(Math.random() * 10);
  if (arr[i] % 2 === 0) {
    tongc += arr[i];
  } else {
    tongl += arr[i];
  }
}
console.log(arr);
console.log(`tong cac so chan: ${tongc}`);
console.log(`tong cac so le: ${tongl}`);
