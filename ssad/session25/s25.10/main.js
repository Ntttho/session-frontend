let products = [
  ["mi tom", 5, 5000],
  ["banh mi", 12, 15000],
  ["banh bao", 5, 8000],
  ["men men", 30, 20000],
  ["banh gao", 0 , 10000]
];
let Bill = [];
let amount = 0;
let menu = [
  "1. xem danh sach san pham co san trong cua hang",
  "2. chon san pham de mua bang cach nhap ten san pham",

  //Sản phẩm không có trong cửa hàng hiển thị thông báo.
  //Sản phẩm có trong cửa hàng khi mua số lượng sẽ giảm đi một, khi số lượng về 0 thì thông báo sản phẩm đã hết.
  //Sản phẩm khi mua đã có trong giỏ hàng thì tăng số lượng lên một

  "3. tinh tong tien va hien thi hoa don",

  "4. thoat",
];

let mainMenu = menu.join("\n");
console.log(mainMenu);

let t = 1;

while (t) {
  let choice = Number(window.prompt(mainMenu, "4"));
  switch (choice) {
    case 1: {
      for (let product of products) {
        console.log(product);
      }
      break;
    }
    case 2: {
      let case2 = buy(products, Bill, amount);
      console.log(case2);
      if (case2 === "mua hang thanh cong") {
        amount++;
      }
      break;
    }
    case 3: {
      let sumOfFee = 0;
      console.log(
        "============================hoa don can phai thanh toan la========================"
      );
      // in ra hoa don
      for (let i = 0; i < amount; i++) {
        console.log(Bill[i], `tong la ${Bill[i][1] * Bill[i][2]}`);
        sumOfFee += Bill[i][1] * Bill[i][2];
      }

      // tinh tong tien

      console.log(`tong so tien phai tra la ${sumOfFee} vnd`);
      break;
    }
    case 4: {
      t--;
      break;
    }
  }
}

function buy(products, bill, count) {
  let numberOfProduct;
  let addBill = prompt("nhap ten san pham de chon va mua");
  let checkProduct = 0;
  let savePosition = 0;
  for (let i = 0; i < products.length; i++) {
    if (addBill === products[i][0]) {
      if (products[i][1] === 0) {
        return "san pham da het";
      }

      checkProduct = 1;
      savePosition = i;
      break;
    }
  }
  if (checkProduct === 0) {
    return "khong co ten san pham o day";
  } else {
    numberOfProduct = Number(prompt("nhap so luong san pham ban can mua"));
    if (numberOfProduct > products[savePosition][1]) {
      return "so luong san pham khong du";
    } else {
      products[savePosition][1] = products[savePosition][1] - numberOfProduct;
    }
  }
  let arr = [
    products[savePosition][0],
    numberOfProduct,
    products[savePosition][2],
  ];
  bill.push(arr);
  return "mua hang thanh cong";
}
