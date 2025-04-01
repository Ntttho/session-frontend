let array = [];

let n = Number(prompt("nhap vao so phan tu cua mang"));
for (let i = 0; i < n; i++) {
  array[i] = Number(prompt(`nhap vao phan tu ${i}`));
}

console.log(`mang ban dau la: ${array}`);

if (array.length === 0) {
  alert("mang khong co phan tu nao");
} else if (!Array.isArray(array)) {
  alert("du lieu khong hop le");
} else {
  let newArray = array.filter((member) => member >= 10);
  console.log(`mang co cac phan tu mang cu va lon hon 10 la: ${newArray}`);
}
