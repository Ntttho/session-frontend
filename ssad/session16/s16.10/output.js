let input1 = Number(prompt("nhap so dau tien"));
let input2 = Number(prompt("nhap so thu 2"));

// tim so lon honw de goi phamj vi
let max = Math.max(input1, input2);
let min = Math.min(input1, input2);

let output = Math.floor(Math.random() * (max - min)) + min;
// su dung Math.floor de giam gia tri lam no toi toi thieu chu khong vuot qua gia trij max
//
document.writeln("so da random: " + output);

/*
3 17 (14)
random = 0-1
phamvi 3 -> 17
<1 ==> 0.1 +min
*/
