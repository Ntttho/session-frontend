//Mỗi món ăn trong danh mục sẽ có thông tin: tên món ăn, giá và mô tả.

let menu =
  "1.Thêm món ăn vào danh mục.\n" +
  "2.Xóa món ăn theo tên khỏi danh mục.\n" +
  "3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).\n" +
  "4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.\n" +
  "5.Tìm kiếm món ăn theo tên trong toàn bộ menu.\n" +
  "6.Thoát";

let listfood = [];
let t = 1;
while (t) {
  let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      addNewFoodToMenu(listfood);
      break;
    }
    case 2: {
      if (listfood.length > 0) {
        deletefoodfrommenu(listfood);
      } else {
        console.log("chua co mon an nao trong danh sach");
      }
      break;
    }
    case 3: {
      if (listfood.length > 0) {
        updatelist(listfood);
      } else {
        console.log("chua co mon an nao trong danh sach");
      }
      break;
    }
    case 4: {
      showListFood(listfood);
      break;
    }
    case 5: {
      if (listfood.length > 0) {
        search(listfood);
      } else {
        console.log("chua co mon an nao trong danh sach");
      }
      break;
    }
    case 6: {
      t--;
      break;
    }
  }
}

// =================== \\
// them mon an vao danh muc \\
function addNewFoodToMenu(list) {
  let food = {};
  food["ten"] = "thit ga nuong";
  food["giatien"] = 300000;
  food["mota"] = "co ga nuong den thui";
  //   food["ten"] = prompt("nhap vao ten mon an");
  //   food["giatien"] = Number(prompt("nhap vao gia tien"));
  //   food["mota"] = prompt("nhap vao mo ta mon an");
  list.push(food);
}
// show danh sach mon an \\
function showListFood(list) {
  console.log("danh sach mon an");

  for (let member of list) {
    console.log(member);
  }
  if (list.length < 1) {
    console.log("chua co mon an nao trong danh sach");
  }
}
// xoa mon an khoi danh sach \\
function deletefoodfrommenu(list) {
  let input = prompt("nhap vao mon an de xoa");
  for (let i = 0; i < list.length; i++) {
    if (input === list[i].ten) {
      list.splice(i, 1);
      alert("xoa thanh cong");
      return;
    }
  }
  console.log("tim khong thay ten mon an");
}
// cap nhap thong tin theo ten mon an
function updatelist(list) {
  let input = prompt("nhap vao ten mon an can cap nhap");

  for (let element of list) {
    if (element.ten === input) {
      alert("cap nhap nha");
      element.ten = prompt("nhap vao ten mon an");
      element.giatien = Number(prompt("nhap vao gia mon an"));
      element.mota = prompt("nhap mo ta cua mon an");
      alert("cap nhap thanh cong");
      return;
    }
  }
  console.log("khong tim thay mon an ban nhap");
}
// tim thong tin
function search(list) {
  let input = prompt("nhap ten mon an");
  let check = 0;
  console.log("danh sach mon an ban tim kiem");
  for (let member of list) {
    if (member["ten"].includes(input)) {
      console.log(member);
      check = 1;
    }
  }
  if (check === 0) {
    console.log("khong tim thay mon an ban nhap");
    alert("khong tim thay mon an ban nhap");
  }
}
