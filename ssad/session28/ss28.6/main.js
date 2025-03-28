const cart = [
  { name: "Mèn mén", price: 30000, quantity: 2 },

  { name: "Mì tôm", price: 5000, quantity: 1 },

  { name: "Bánh bao", price: 15000, quantity: 3 },
];
let tongtien = 0;
for (let mathang of cart) {
  mathang["sum"] = mathang.price * mathang.quantity;
}

console.log("==========don hang==========");
for (let mathang of cart) {
  console.log(
    `${mathang.name} soluong: ${mathang.quantity} gia: ${mathang.price} tong tien: ${mathang.sum}`
  );
  tongtien += mathang.sum;
}
console.log(`tong so tien phai tra:   ${tongtien}`);
