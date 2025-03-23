let arr = [];
let max = 0;
let position = -1;
for (var i = 0; i < 10; i++) {
  arr[i] = parseInt(prompt`nhap vao phan tu thu ${i} cua mang`);
  if (max < arr[i]) {
    max = arr[i];
    position = i;
  }
}
if (position !== -1) {
    console.log(`gia tri lon nha: ${max}\ntai vi tri: ${position}`);
} else {console.log("khong co so lon nhat")};
