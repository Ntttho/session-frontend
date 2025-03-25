let Menu =
  "1.Tính diện tích hình tròn.\n" +
  "2.Tính chu vi hình tròn.\n" +
  "3.Tính diện tích hình chữ nhật.\n" +
  "4.Tính chu vi hình chữ nhật.\n" +
  "5.Thoát.\n";
  //dv tron
let R = 10;
const Pi = 3.14159;
//dv hcn
let w = 10;
let l = 20;
let t = 1;
while (t) {
  let choice = Number(window.prompt("nhap vao lua chon cua ban", 0));
  switch (choice) {
    case 0: {
      console.log(`hinh tron voi ban kinh ${R}\n`+`hinh chu nhat chieu rong va dai ${w} va ${l}`);
      
      console.log(Menu);
      break;
    }
    case 1: {
      console.log(`dien tich hinh tron la: ${Pi * R * R}`);
      break;
    }
    case 2: {
      console.log(`chu vi hinh tron ${2*Pi*R}`);
      break;
    }
    case 3: {
      console.log(`dien tich hinh chu nhat la: ${w*l}`);
      break;
    }
    case 4: {
      console.log(`chu vi hinh chu nhat la: ${2*(l+w)}`);
      break;
    }
    case 5: {
      t--;
      break;
    }
  }
}
