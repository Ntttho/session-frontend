/*
id : number (mã sách)
name : string (tên sách)
price : number (giá sách)
quantity : number (số lượng sách)
category : string (tên thể loại sách)
thieu nhi, tam ly, tinh cam, kinh te, ton giao .....



Khởi tạo giỏ hàng let cart=[]

=========================================
Yêu cầu:
1 Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2 Thêm sách mới vào kho
3 Tìm kiếm sách theo tên hoặc id.
4 Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5 Sắp xếp sách theo giá:
        Tăng dần.
        Giảm dần.
6 Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7 Hiển thị tổng số lượng sách trong kho.
8 Thoát chương trình.
*/

let menu =
  "1. hien thi danh sach theo the loai\n" +
  "2. them sach moi vao kho\n" +
  "3. tim kiem sach theo ten hoac id\n" +
  "4. mua sach (Nhap id sach can mua va so luong, cap nhap lai kho sach)\n" +
  "5. sap xep sach theo gia\n" +
  "6. tinh tong so luong sach da mua va in ra tong tien trong gio hang\n" +
  "7. hien thi tong so luong sach trong kho\n" +
  "8. thoat chuong trinh";

let t = 1;
let khoSach = [
  {
    id: 1,
    ten: "day dan lap trinh",
    price: 399000,
    quantity: 79,
    category: "giao duc",
  },
  {
    id: 2,
    ten: "day dan lap trinh",
    price: 299000,
    quantity: 79,
    category: "giao duc",
  },
];

let cart = []; // gio hang
while (t) {
  let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      showListBook(khoSach);
      break;
    }
    case 2: {
      addNewBook(khoSach);
      break;
    }
    case 3: {
      findBookById(khoSach);
      break;
    }
    case 4: {
      adcart(khoSach, cart);
      break;
    }
    case 5: {
      sortBook(khoSach);
      break;
    }
    case 6: {
      sum(cart);
      break;
    }
    case 7: {
      count(khoSach);
      break;
    }
    case 8: {
      t--;
      break;
    }
  }
}

//==================================================================================

// =================hien thi danh sach sach theo the loai=============
function showListBook(list) {
  let theloai = prompt("nhap vao the loai de tim kiem");
  let check = 0;
  console.log(
    `==================danh sach the loai ${theloai}====================`
  );
  for (let member of list) {
    if (member.category === theloai) {
      console.log(member);
      check = 1;
    }
  }
  if (check === 0) {
    console.log("khong co sach loai nay!!!.....");
    alert("khong tim thay loai sach ban nhap");
  } else {
    alert("tim thay sach thanh cong");
  }
}

// =================them sach moi vao kho=============================
function addNewBook(list) {
  let book = {};
  book.id = list.length;
  book.ten = prompt("nhap ten cua sach");
  book.price = Number(prompt("nhap vao gia tien cua sach"));
  book.quantity = Number(prompt("nhap vao so luong sach con trong kho"));
  book.category = prompt("nhap vao the loai cua sach");
  list.push(book);
  alert("them vao kho thanh cong");
}
//=======================tim kiem sach theo id==================
function findBookById(list) {
  let bookid = Number(prompt("nhap id sach bat dau tim kiem"));
  for (let member of list) {
    if (member.id === bookid) {
      console.log("sach ban can tim");
      console.log(member);
      alert("tim sach bang id thanh cong");
      return;
    }
  }
  console.log("khong tim thay sach qua id ban nhap");
  alert("khong tim thay sach qua id ban nhap");
}
// =============== mua sach =================
function adcart(list, cart) {
  let ten = prompt("nhap vao ten sach");
  let book = {};
  for (let member of list) {
    if (member.ten === ten) {
      let soluong = Number(prompt("nhap vao so luong can mua"));
      if (member.quantity >= soluong) {
        member.quantity -= soluong;
        book.id = member.id;
        book.ten = member.ten;
        book.price = member.price;
        book.quantity = soluong;
        book.category = member.category;
        cart.push(book);
        console.log(book);
        alert("ban them vao gio hang thanh cong");
      } else {
        console.log("so luong sach khong du");
      }
      return;
    }
  }
  alert("khong tim thay sach ban nhap");
}
// ===============sap xep sach theo gia tien ===============
function sortBook(list) {
  let luachon = Number(
    prompt("1. tang dan\n2. giam dan\n nhap lua chon cua ban")
  );
  switch (luachon) {
    case 1: {
      for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
          if (list[i].price > list[j].price) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      break;
    }
    case 2: {
      for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
          if (list[i].price < list[j].price) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      break;
    }
  }
  alert("sap xep thanh cong");
}
// ============== tinh tong so luong sach va tong tien ===========
function sum(cart) {
  let sumBook = 0;
  let sumPrice = 0;
  for (let member of cart) {
    sumBook += member.quantity;
    sumPrice += member.quantity * member.price;
  }
  console.log(`tong so luong sach da mua la ${sumBook} cuon`);
  console.log(`tong thanh toan don hang la ${sumPrice} vnd`);
}

// ================hien thi so luong sach con trong kho
function count(list) {
  let count = 0;
  for (let member of list) {
    count += member.quantity;
  }
  console.log(`tong so luong sach trong kho la: ${count}`);
}
