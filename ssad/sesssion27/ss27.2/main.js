let Menu =
  "1. nhap danh sach sinh vien\n" +
  "2. hien thi danh sach sinh vien\n" +
  "3. tim sinh vien theo ten\n" +
  "4. xoa sinh vien khoi danh sach\n" +
  "5. thoat";

let mangSinhVien = [];
let t = 1;
while (t) {
  let choice = Number(window.prompt("nhap vao lua chon cua ban", 0));
  switch (choice) {
    case 0: {
      console.log(Menu);
      break;
    }
    case 1: {
      enterStudentToList(mangSinhVien);
      break;
    }
    case 2: {
      showListStudent(mangSinhVien);
      break;
    }
    case 3:{
      findStudentfromTheirName(mangSinhVien);
      break;
    }
    case 4:{
      deteleStudent(mangSinhVien);
      break;
    }
    case 5: {
      t = 0;
      break;
    }
  }
}
//==============cac ham lam viec===============
function enterStudentToList(arr) {
  let size = +prompt("nhap so luong sinh vien");
  for (let i = 0; i < size; i++) {
    arr[i] = prompt("nhap vao ho va ten");
  }
}
//case2
function showListStudent(arr) {
  arr.forEach((member, index) => {
    console.log(index + " hoten: " + member);
  });
}
//case3
function findStudentfromTheirName(arr){
  let nameOfStudent = window.prompt("nhap vao ten sinh vien", "hello");
  let newarr = arr.filter((member) => {
    return member.includes(nameOfStudent);
  });
  console.log(`danh sach nhung sv duoc tim thay: ${newarr}`);
  if(newarr.length === 0){
    console.log("khong tim thay thong tin");
  }
}
//case4
function deteleStudent(arr){
  let name = prompt("nhap vao ten sinh vien ban muon xoa");
  arr.forEach((member,index,arr) => {
    if(member === name){
      arr.splice(index,1);
    }
  });
}