/*
id : number (mã điện thoại)
name : string (tên điện thoại)
price : number (giá tiền điện thoại)
quantity : number (số lượng điện thoại)
company : string (tên hãng điện thoại)

let cart = []

1 Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
2 Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
3 Tìm kiếm điện thoại theo tên hoặc id
4 Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
5 Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6 Sắp xếp điện thoại theo giá:
    Tăng dần
    Giảm dần
7 Hiển thị tổng số tiền của các điện thoại trong kho
8 Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
9 Thoát chương trình
*/
let menu =
  "1 hien thi danh sach dien thoai theo hang\n" +
  "2 them dien thoai moi vao cua hang\n" +
  "3 tim kiem dien thoai theo ten hoac id\n" +
  "4 mua dien thoai\n" +
  "5 thanh toan tat ca dien thoai trong gio hang\n" +
  "6 sap xep dien thoai theo gia\n" +
  "7 hien thi tong so tien cua cac dien thoai trong kho\n" +
  "8 hien thi tong so luong dien thoai theo tung hang\n" +
  "9. hoat chuong trinh";
let phone = [
  {
    id: 1,
    name: "galaxy A23",
    price: 5900000,
    quantity: 15,
    company: "samsung",
  },
  {
    id: 2,
    name: "15 pro-max",
    price: 15000000,
    quantity: 15,
    company: "iphone",
  },
  {
    id: 3,
    name: "apple E37",
    price: 7000000,
    quantity: 14,
    company: "apple",
  },
  {
    id: 4,
    name: "redmi 25pj",
    price: 7200000,
    quantity: 15,
    company: "xiaomi",
  },
  {
    id: 5,
    name: "galaxy A53",
    price: 7200000,
    quantity: 10,
    company: "samsung",
  },
];
let cart = [];
let t = 1;
while (t) {
  let choice = Number(window.prompt(menu,"nhap lua chon cua ban"));
  switch (choice) {
    case 1: {
      showListphone(phone);
      break;
    }
    case 2: {
      themdtmoi(phone);
      break;
    }
    case 3: {
      timdt(phone);
      break;
    }
    case 4: {
      muadt(phone, cart)
      break;
    }
    case 5: {
      tongtienThanhtoan(cart);
      break;
    }
    case 6: {
      sapxep(list);
      break;
    }
    case 7: {
      tongtientrongkho(list);
      break;
    }
    case 8: {
      soluongdienthoaitheohang(list);
      break;
    }
    case 9: {
      t--;
      break;
    }
  }
}
// ================= hien thi danh sach dien thoai theo hang ===========
function showListphone(list) {
  let hangdt = prompt("nhap vao hang dien thoai can xem");
  for (let member of list) {
    if (member.company === hangdt) {
      console.log(member);
    }
  }
}
// ================== them dien thoai moi vao cua hang =============
function themdtmoi(list) {
  let dt = {};
  dt.id = list.length+1;
  dt.name = prompt("nhap vao ten dien thoai");
  dt.price = Number(prompt("nhap gia tien cua dien thoai"));
  dt.quantity = Number(prompt("nhap so luong dien thoai co trong shop"));
  dt.company = prompt("hang dien thoai la gi vay");
  list.push(dt);
  alert("them dien thoai moi thanh cong");
}
// ===================tim theo ten hoac theo id ==============
function timdt(list) {
  let tenid = prompt("nhap ten hoac id cua dien thoai");
  for (let member of list) {
    if (member.name === tenid || member.id == tenid) {
      console.log(member);
      alert("da tim thay dien thoai ban can");
      return;
    }
  }
  alert("khong tim thay dien thoai ban can");
}
// ============= mua dien thoai ===============
function muadt(list, cart) {
  let ten = prompt("nhap vao ten dien thoai can mua");
  let dt = {};
  for (let member of list) {
    if (member.name === ten) {
      let soluong = Number(prompt("nhap vao so luong can mua"));
      if (soluong < member.quantity) {
        member.quantity = member.quantity - soluong;
        dt.name = ten;
        dt.id = member.id;
        dt.price = member.price;
        dt.quantity = soluong;
        dt.company = member.company;
        cart.push(dt);
        alert("them vao gio hang thanh cong");
      }
      return 0;
    }
  }
  alert("khong tim thay dien thoai");
}
// ================ thanh toan tat ca dien thoai trong ==================
function tongtienThanhtoan(cart){
  let sum = 0;
  for(let member of cart){
    sum+=member.price*member.quantity;
  }
  console.log(`tong so tien can phai thanh toan la ${sum}`);
}
// ================ sap xep dien thoai theo gia tien ==============
function sapxep(list){
  let luachon = Number(prompt("1. tang dan theo gia\n2. giam dan theo gia\nnhap lua chon cua ban"));
  switch(luachon){
    case 1:{
      for(let i = 0; i < list.length; i++){
        for(let j = i; j<list.length; j++){
          if(list[i].price > list[j].price){
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      break;}
    case 2:{
      for(let i = 0; i < list.length; i++){
        for(let j = i; j<list.length; j++){
          if(list[i].price > list[j].price){
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      break;}
  }
  alert("sap xep thanh cong");
}
// ==============hien thi tong so tien cua cac dien thoai trong kho
function tongtientrongkho(list){
  let sum = 0;
  for(let member of list){
    sum = member.price * member.quantity;
  }
  console.log(`tong so tien cua tat ca dien thoai trong kho la ${sum}`);
}
// ================ hien thi tong so luong dien thoai tung hang==========
function soluongdienthoaitheohang(list){
  for(let i = 0; i<list.length;i++){
    let count = 0;
    for(let j = 0; j<list.length; j++){
      if(j >= i && list[i].company === list[j].company){
        count+= list[j].quantity;
      }
    }
    console.log(`so luong dien thoai ${list[i].company} la ${count}`);
  }
}