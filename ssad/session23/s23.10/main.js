let menu =
  "================== MENU =================== \n" +
  "1. Nhập số phần tử cần nhập và giá trị các phần tử " +
  "2. In ra giá trị các phần tử đang quản lý \n" +
  "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
  "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
  "5. In ra các số nguyên tố trong mảng và tính tổng \n" +
  "6. Nhập một số và đếm số lần xuất hiện trong mảng\n" +
  "7. Thêm một phần tử vào vị trí chỉ định \n" +
  "8. Xóa một phần tử theo giá trị\n" +
  "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
  "0. Thoát \n" +
  "============================================\n";
let t = 1;
let array = [];
while (t > 0) {
  let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      let size = Number(prompt("nhap vao so luong phan tu"));
      for (let i = 0; i < size; i++) {
        array[i] = Number(prompt(`nhap vao so thu ${i}`));
      }
      alert("them mang thanh cong");

      break;
    }
    case 2: {
      if (array.length > 0) {
        for (let i in array) {
          console.log(`phan tu thu ${i} la: ${array[i]}`);
        }
      } else {
        alert("hehe chua co phan tu nao");
      }
      break;
    }
    case 3: {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          sum = sum + array[i];
        }
        for (let j = i; j < array.length; j++) {
          if (array[i] < array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
      if (array.length === 0) {
        alert("mang khong co phan tu nao");
      } else {
        console.log(`tong cac phan tu la so chan: ${sum}`);
        console.log(`mang da duoc sap xep giam dan`);
      }
      break;
    }
    case 4: {
      if (array.length) {
        let min = array[0];
        let max = array[0];
        let pomin = 0;
        let pomax = 0;
        for (let i = 1; i < array.length; i++) {
          if (min > array[i]) {
            min = array[i];
            pomin = i;
          }
          if (max < array[i]) {
            max = array[i];
            pomax = i;
          }
        }
        console.log(
          `gia tri nho nhat trong mang la ${min} tai vi tri ${pomin}`
        );
        console.log(
          `gia tri lon nhat trong mang la ${max} tai vi tri ${pomax}`
        );
      } else {
        alert(`mang khong co phan tu nao`);
      }
      break;
    }
    case 5: {
      let sum = 0;
      if (array.length > 0) {
        console.log("cac phan tu trong mang ma la so nguyen to la");
        for (let num of array) {
          let check = 1;
          for (let i = 2; i * i <= num; i++) {
            if (num % 2 === 0) {
              check = 0;
            }
          }
          if (check != 0) {
            console.log(num);
            sum += num;
          }
        }
        console.log(`tong cac so nguyen to la: ${sum}`);
      } else {
        alert("mang khong chua phan tu nao");
      }
      break;
    }
    case 6: {
      if (array.length > 0) {
        let input = Number(
          prompt("nhap vao 1 so kiem tra so lan xuat hien cua no")
        );
        let count = 0;
        for (let i of array) {
          if (i === input) {
            count++;
          }
        }
        console.log(`phan tu ${input} xuat hien ${count} lan trong mang`);
      } else {
        alert("mang chua co phan tu nao");
      }
      break;
    }
    case 7: {
      if (array.length > 0) {
        let i = Number(prompt("nhap vi tri muon them"));
        if (i > array.length || i < 0) {
          i = array.length;
        }
        let input = Number(prompt("nhap vao gia tri muon them vao"));
        array.splice(i, 0, input);
        alert("them moi thanh cong");
      } else {
        let input = Number(
          prompt("mang chua co phan tu nao\nnhap gia tri ban muon them vao")
        );
      }
      break;
    }
    case 8: {
      let input = Number(prompt("nhap gia tri can xoa khoi mang"));
      let newarray = [];
      for (let i in array) {
        if (array[i] != input) {
          newarray.push(array[i]);
        }
      }
      array = newarray;
      alert("xoa phan tu thanh cong");
      if (array.length < 0) {
        alert("mang chua co phan tu nao");
      }
      break;
    }
    case 9:{
        for(let ind in array){
            for(let indd in array){
                if(array[ind] < array[indd]){
                    let temp = array[ind];
                    array[ind] = array[indd];
                    array[indd] = temp;
                }
            }
        }
        if(array.length > 0){
            alert("sap xep thanh cong");
        }else{
            alert("mang khong co phan tu nao");
        }
        break;
    }
    case 0: {
      t--;
      break;
    }
  }
}
