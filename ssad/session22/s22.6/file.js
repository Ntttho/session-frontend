let arr = [1, 2, 3, 5, 7, 6, 2, 4, 8, 3, 9, 0, 2, 3, 6, 1, 2, 7];
let input = parseInt(prompt("nhap vao 1 so nguyen"));
let count = 0;
for (var i = 0; i < arr.length; i++) {
  switch (input) {
    case arr[i]: {
      count++;
      break;
    }
  }
}
if (count > 0) {
  console.log(`phan tu ${input} xuat hien ${count} lan`);
} else {
  console.log(`phan tu ${input} khong xuat hien trong mang`);
}
