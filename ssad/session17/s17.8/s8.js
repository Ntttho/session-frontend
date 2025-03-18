let date1 = prompt("nhap ngay 1 vao theo tu tu: nam-thang-ngay");
let date2 = prompt("nhap ngay 2 vao theo tu tu: nam-thang-ngay");

let day1 = new Date(date1);
let day2 = new Date(date2);

let gap = Math.abs(day2 - day1);

let gapday = gap / (1000*60 * 24 * 60);
// ms *1000 (s) *60 (p) *24 (ngay)
document.writeln(gapday);
