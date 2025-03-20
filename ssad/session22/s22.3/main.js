let num = prompt("nhap vao mot day so");
if (num % 1 === 0) {
  let str = num.toString();
  let str1 = str.split("").reverse();
  let str2 = str1.join("");
  console.log(str2);
} else {
  console.log("nhap sai du lieu");
}
/*
split chuyển đổi chuổi thành 1 mảng phân cách bởi dấu nào đó
reverse chỉ có thể áp dụng cho mảng không thể áp dụng cho chuổi sử dụng là để đảo ngược lại mảng ban đầu
join('dauphancach') ==> sử dụng để chuyển đổi 1 mảng thành các phần tử của một chuổi phà phân cách bởi dấu phân cách truyền vào
*/
