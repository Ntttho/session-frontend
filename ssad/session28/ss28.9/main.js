/*
id
title
author
year
price
isAvailable: true false

*/
let menu =
  "1.Thêm sách mới.\n" +
  "2.Hiển thị danh sách sách.\n" +
  "3.Tìm kiếm sách theo tiêu đề.\n" +
  "4.Cập nhật trạng thái mượn/trả sách theo id sách.\n" +
  "5.Xóa sách theo id sách ra khỏi danh sách.\n" +
  "6.Sắp xếp sách theo giá tăng dần.\n" +
  "7.Thoát.";
let library = [];

while (true) {
  let choice = Number(window.prompt(library, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      console.log("===============them sach moi=============");
      addNewBook(library);
      break;
    }
    case 2: {
      console.log("===============hien thi danh sach=============");
      if (library.length > 0) showLishBook(library);
      else console.log("chua co sach nao");
      break;
    }
    case 3: {
      console.log("===============tim sach qua tieu de=============");
      if (library.length > 0) findBook(library);
      else console.log("chua co sach nao");
      break;
    }
    case 4: {
      console.log("===============cap nhap muon tra sach=============");
      if (library.length > 0) muontrasach(library);
      else console.log("chua co sach nao");
      break;
    }
    case 5: {
      console.log("===============xoa sach theo tieude=============");
      if (library.length > 0) deleteBook(library);
      else console.log("chua co sach nao");
      break;
    }
    case 6: {
      console.log("===============sap xep sach theo gia tien=============");
      if (library.length > 0) arrange(library);
      else console.log("chua co sach nao");
      break;
    }
    case 7:
      {
        break;
      }
      if (choice === 7) {
        alert("thoat chuong trinh")
        break;
      }
  }
}

// them sach moi
function addNewBook(arr) {
  let book = {};
  book.id = prompt("nhap id sach");
  book.title = prompt("nhap tieu de sach");
  book.author = prompt("nhap ten tac gia");
  book.year = Number(prompt("nhap vao nm xuat ban"));
  book.price = Number(window.prompt("nhap vao gia tien", 100000));
  book.isAvailable = false; // van con trong kho

  arr.push(book);
}
// hien thi danh sach sach
function showLishBook(arr) {
  arr.forEach((member) => {
    console.log(member);
  });
}
//tim sach thong qua title
function findBook(arr) {
  let check = 0;
  let input = prompt("nhap vao tieu de sach va show ra");
  arr.forEach((element) => {
    if (input === element.title) {
      console.log(element);
      check = 1;
    }
  });
  if (check === 0) {
    console.log("tim khong thay title qua input");
  }
}
// cap nhap muon tra sach // muon true// tra = false
function muontrasach(arr) {
  let check = 0;
  let input = prompt("nhap vao tieu de sach de tim sach va sua trang thai");
  arr.forEach((element) => {
    if (element.title === input) {
      let muontra = Number(
        "nhap vao 0 tuong ung sach da duoc tra \nnhap vao bat ki thi sach la muon"
      ); // muon true  tra false
      element.isAvailable = muontra === 0 ? true : false;
      check = 1;
    }
  });
  if (check === 0) console.log("khong tim thay sach qua tieu de");
}
//xoa sach theo id
function deleteBook(arr) {
  let check = 0;
  let input = prompt("nhap vao id sach de xoa");
  arr.forEach((element) => {
    if (element.id === input) {
      arr.splice(element, 1);
      check = 1;
    }
  });
  if (check === 0) {
    console.log("khong tim thay id sach trong thu vien");
  }
}
//sap xep danah sach gia tang dan
function arrange(arr) {
  arr.sort(function (a, b) {
    return a.price - b.price;
  });
}
