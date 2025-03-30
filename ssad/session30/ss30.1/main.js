// Khởi tạo giỏ hàng let cart=[].
// gio hang co: san pham, so luong, gia tien, mota
// Viết chương trình  cho phép người dùng:

// 1 Hiển thị các sản phẩm theo tên danh mục.
// 2 Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
//      Sản phẩm không có trong cửa hàng hiển thị thông báo.
//      Sản phẩm có trong cửa hàng
//              Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
//              Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
// 3 Sắp xếp các sản phẩm trong cửa hàng theo giá:
//      Tăng dần.
//      Giảm dần.
// 4 Tính số tiền thanh toán trong giỏ hàng.
// 5 Thoát.
let products = [
  // id = length
  {
    //1
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    //2
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    //3
    id: 3,
    name: "com lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    //4
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
let menu =
  "1 hien thi san pham theo ten danh muc\n" +
  "2 chon san pham de mua bang cach nhap id san pham\n" +
  "3 sap xep cac san pham trong cua hang theo gia\n" +
  "4 tinh so tien thanh toan trong gio hang\n" +
  "5 thoat";

let t = 1;
while (t) {
  let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      showListProducts(products);
      break;
    }
    case 2: {
      selectProductInMenu(products, cart);
      break;
    }
    case 3: {
      sapxepsp(products);
      break;
    }
    case 4: {
        bill(cart);
      break;
    }
    case 5: {
      t--;
      break;
    }
  }
}
//=====================================================

// hien thi san pham theo ten danh muc
function showListProducts(list) {
  for (let member of list) {
    console.log(member);
  }
}
// mua hang ================ thong qua ten
function selectProductInMenu(list, cart) {
  let ob = {};
  ob.name = prompt("nhap ten san pham ban can them vao gio hang");
  for (let member of list) {
    if (ob.name === member.name) {
      alert("co san pham trong cua hang");
      ob.number = Number(prompt("nhap vao so luong can mua"));
      if (ob.number <= member.quantity) {
        member.quantity = member.quantity - ob.number;
        ob.price = member.price;
        ob.id = member.id;
        ob.category = member.category;
        cart.push(ob);
        // ob gom id, ten san pham, gia thanh, so luong, mo ta;
        for (let element in ob) {
          console.log(element + " = " + ob[element]);
        }
      } else {
        alert("so luong san pham khong du");
      }
      return;
    }
  }
  console.log("khong tim thay san pham");
}
//sap xep san pham theo gia thanh
function sapxepsp(list) {
  let luachon = Number(
    window.prompt("1. tang dan\n2. giam dan\nnhap lua chon cua ban")
  );
  switch (luachon) {
    case 1: {
      for (let element in list) {
        for (let member in list) {
          if (list[element].price < list[member].price) {
            let temp = list[element];
            list[element] = list[member];
            list[member] = temp;
          }
        }
      }
      break;
    }
    case 2: {
      for (let element in list) {
        for (let member in list) {
          if (list[element].price > list[member].price) {
            let temp = list[element];
            list[element] = list[member];
            list[member] = temp;
          }
        }
      }
      break;
    }
  }
  alert("sap xep thanh cong");
}
// tinh so tien thanh toan

function bill(list){
    let sum = 0;
    for(let member of list){
        sum = sum + member.number * member.price;
    }
    console.log(`tong so tien phai thanh toan la: ${sum}`);
}