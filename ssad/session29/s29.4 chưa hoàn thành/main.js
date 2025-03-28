// id công việc, tên công việc, mô tả, thời gian bắt đầu và trạng thái.
let menu =
  "1.Thêm cong viec moi.\n" +
  "2.Hiển thị tat ca cong viec.\n" +
  "3.cap nhap trang thai cong viec theo id\n" +
  "4.loc cong viec theo trang thai hoan thanh, chua hoan thanh\n" +
  "5.sap xep cac cong viec theo trang thai cong viec\n" +
  "6.Thoát.";

let listcongviec = [];

while (true) {
  let choice = Number(prompt("nhap vao lua chon cua ban"));

  if (choice === 6) {
    break;
  }
}
//============cac ham lam viec=============

// ============ 1 them cong viec moi ================
function addNewWork(list) {
  let work = {};
  // work.id = Math.round(Math.random() * 100000000);
  // work.name = "developer";
  // work.mota = "nha phat trien phan mem"
  // work.thoigianbd = new Date("2025/2/12");
  // work.trangthai = "chua hoan thanh";
  work.id = Math.round(Math.random() * 100000000);
  work.name = prompt("nhap vao ten cong viec");
  work.mota = prompt("nhap mo ta");
  work.thoigianbd = new Date(prompt("nhap ngay thang nam:"));
  work.trangthai = prompt("nhap vao trang thai cong viec");
  list.push(work);
}
//============== 2 hien thi tat ca cong viec============
function showListWork(list){
  for(let member of list){
    console.log(member);
  }
}
// ================ 3 cap nhap trang thai thong qua id==========
function updateStatus(list){
  let input = Number(prompt("nhap vao id tim kiem va cap nhap"));
  for(let member of list){
    if(member.id === list){
      member.trangthai = prompt("cap nhap trang thai cong viec nay");
      alert("cap nhap thanh cong");
      return;
    }
    console.log("khong tim thay id ban vua nhap");
  }
}
// ================= 4 loc cong viec hoan thanh hoac chua hoan thanh=========
function device(list){
  console.log("cac cong viec da hoan thanh");
  let check = 0;
  for(let member of list){
    if(member.trangthai === "hoan thanh"){
      console.log(member);
      check = 1;
    }
  }
  if(check === 0){
    console.log("==================khong tim thay===================");
  }
  check = 0;
  for(let member of list){
    if(member.trangthai === "khong hoan thanh"){
      console.log(member);
      check = 1;
    }
  }
  if(check === 0){
    console.log("==================khong tim thay===================");
  }
}
// ========= 5 sap xep cac cong viec theo trang thai
//chua biet lam