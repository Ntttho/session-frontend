let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = Number(prompt(`nhap vao phan tu ${i} cua mang`));
}
function positiveInterger(arr) {
  let count = 0;
  for (let member of arr) {
    if (member > 0 && member % 1 == 0) {
      count++;
    }
  }
  return count;
}

let result = positiveInterger(arr);
console.log(result);
