let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

  { name: "Bùi Bích Ngọc", scores: { math: 9, english: 10, literature: 9 } },

  { name: "Hà Thái Sơn", scores: { math: 5, english: 9, literature: 9 } },
];
// 1 mang gom 3 object
// moi object lai co 2 thuoc tinh va trong do thuoc tinh score la 1 object

let studentList = students.filter((member, index, arr) => {
  return checkscore(arr[index].scores) !== 0;
});
// in ra danh sach
console.log("danh sach cac hoc sinh trung binh mon tren 8");

for (let student in studentList) {
  console.log(studentList[student]);
}

function checkscore(ob) {
  if ((ob.math + ob.english + ob.literature) / 3 >= 8) {
    return 1;
  } else {
    return 0;
  }
}
