let Menu =
  "1.Nhập danh sách số nguyên.\n" +
  "2.Tính trung bình các số.\n" +
  "3.Tìm số chẵn lớn nhất.\n" +
  "4.Tìm số lẻ nhỏ nhất.\n" +
  "5.Thoát.\n";
let t = 1;
let arr = [];
while (t) {
  let choice = Number(window.prompt("nhap vao lua chon cua ban", 0));
  switch (choice) {
    case 0: {
      console.log(Menu);
      break;
    }
    case 1: {
      nhapMang(arr);
      break;
    }
    case 2: {
      console.log(tinhtrungbinh(arr));
      break;
    }
    case 3: {
      console.log(`${chanLonNhat(arr)}`);
      break;
    }
    case 4: {
      console.log(leNhoNhat(arr));

      break;
    }
    case 5: {
      t--;
      break;
    }
  }
}

//cac ham xu ly
// nhap danh sach so nguyen
function nhapMang(array) {
  let size = Number(prompt("nhap so phan tu cua mang"));
  for (let i = 0; i < size; i++) {
    array[i] = Number(prompt(`nhap phan tu thu ${i}`));
  }
}
// tinh trung binh
function tinhtrungbinh(arr) {
  let sum = arr.reduce((tong, member) => {
    return tong + member;
  }, 0);
  let trungbinh = sum / arr.length;
  return trungbinh;
}
// tim so chan lon nhat
function chanLonNhat(arr) {
  let result = arr.reduce((max, element) => {
    return element > max && element % 2 === 0 ? element : max;
  }, -Infinity);
  if (result === -Infinity) {
    return "khong co phan tu nao la so chan";
  } else return `phan tu la so chan lon nhat trong mang la: ${result}`;
}

// tim so le nho nhat
function leNhoNhat(arr) {
  let result = arr.reduce((min, element) => {
    return element < min && (element % 2 === 1 || element % 2 === -1)
      ? element
      : min;
  }, Infinity);
  if (result === Infinity) {
    return "khong co phan tu nao la so le";
  } else return `phan tu la so le nho nhat trong mang la: ${result}`;
}
