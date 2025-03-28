/*
id: Định danh duy nhất.
name: Tên sản phẩm.
price: Giá sản phẩm.
category: Danh mục sản phẩm.
quantity: Số lượng sản phẩm trong kho.
*/
let menu =
  "1.Thêm san pham vào danh sach san pham .\n" +
  "2.hien thi tat ca san pham.\n" +
  "3.Tìm kiếm thông tin qua id va in ra chi tiet.\n" +
  "4.Cập nhật thông tin san pham\n" +
  "5.Xóa san pham thogn qua id.\n" +
  "6.loc san pham theo khoang gia.\n" +
  "7. thoat";

let listproduct = [];
while (true) {
  let choice = Number(window.prompt(menu, "nhap lua chon cua ban"));
  switch (choice) {
    case 1: {
      addNewproduct(listproduct);
      break;
    }
    case 2: {
      if (listproduct.length > 0) {
        showlist(listproduct);
      } else {
        alert("chuu co lien he nao trong danh sach");
      }
      break;
    }
    case 3: {
      if (listproduct.length > 0) {
        findproductbyid(listproduct);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 4: {
      if (listproduct.length > 0) {
        update(listproduct);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 5: {
      if (listproduct.length > 0) {
        deleteproduct(listproduct);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 6: {
      //loc khoang gia
      loc(listproduct);
      break;
    }
    case 7: {
      break;
    }
  }
  if (choice === 7) {
    break;
  }
}
// ================= cac ham lam viec voi contact

// them nguoi lien he moi
function addNewproduct(list) {
  let product = {};
  product.id = Math.round(Math.random() * 300000000);
  product.name = "banh snack";
  product.price = 6000;
  product.quantity = 1000;
  product.catagory = "an vat";
  list.push(product);
}

// hien thi danh sach
function showlist(list) {
  console.log("show danh sach san pham");
  for (let member in list) {
    console.log(list[member]);
  }
}

// tim kiem thong tin theo so dien thoai
function findproductbyid(list) {
  let input = Number(prompt("nhap vao id de tim kiem"));
  console.log("tim product thong qua id");

  for (let member in list) {
    if (list[member].id === input) {
      console.log(list[member]);
      return;
    }
  }
  console.log("khong tim thay");

  alert("khong tim thay thong tin tren");
}
// cap nhap thong tin thong qua id

function update(list) {
  let input = Number(prompt("nhap vao id de sua doi thong tin"));
  for (let member of list) {
    if (member.id === input) {
      member.name = prompt("nhap ten san pham");
      member.price = Number(prompt("nhap gia san pham"));
      member.quantity = Number(prompt("nhap vao so luong con lai"));
      member.catagory = prompt("chinh sau danh muc");
      alert("cap nhap thanh cong");
      return;
    }
  }
  alert("khong tim thay id nay");
}

// coa doi tuong contact
function deleteproduct(list) {
  let input = Number(prompt("nhap vao id ban muon xoa"));
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === input) {
      list.splice(i, 1);
      alert("xoa thanh cong");
      return;
    }
  }
  alert("khong tim thay id nay");
}

// loc
function loc(list) {
  for (let member of list) {
    if (member.price > 25000) {
      member["type"] = "gia cao";
    } else {
      member["type"] = "gia thap";
    }
  }
}
