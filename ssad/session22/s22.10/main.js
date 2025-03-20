let t = 1;
let arr = new Array(size);
while (t) {
  let str = `1.Nhập vào mảng
\n2.Hiển thị mảng
\n3.Thêm phần tử
\n4.Sửa phần tử
\n5.Xóa phần tử
\n6.Thoát`;
  let input = Number(window.prompt(str, "6"));
  switch (input) {
    case 1: {
      var size = Number(prompt("nhap do dai mang"));
      for (var i = 0; i < size; i++) {
        arr[i] = Number(prompt(`nhap phan tu thu ${i}`));
      }
      break;
    }
    case 2: {
      console.log(arr);
      break;
    }
    case 3: {
      let position = Number(prompt(`ban muon them truoc phan tu thu may`));
      let add = Number(prompt("nhap phan tu ban muon them"));
      arr.splice(position, 0, add);
      size++;
      break;
    }
    case 4: {
      let position = Number(prompt(`nhap phan tu ban muon sua`));
      arr[position] = Number(prompt("luu su thay doi"));
      break;
    }
    case 5: {
      let position = Number(prompt("nhap phan tu ban muon xoa"));
      arr.splice(position, 1);
      size--;
      break;
    }
    case 6: {
      t = 0;
      break;
    } 
    default{
        break;
    }
  }
}
