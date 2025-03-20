let array = [
  1,
  "hello may",
  "may thich gi",
  "thich dam nhau khong",
  [1, 2, 3, "long lon"],
];
console.log(array);

console.log(array.splice(1, 2)); // vi tri bat dau(1) va so phan tu xoa(2 phan tutu)
document.writeln(
  array.splice(1, 0, "nhin cai quan que", "tao them vao phan tu thoi")
);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let arr = array.slice(2, 4);
// su dung de sao chep chuổi hoặc mãng từ vị trí 2 và sao chép den vi tri 4, tra ve 1 mang moi
document.writeln(arr);
