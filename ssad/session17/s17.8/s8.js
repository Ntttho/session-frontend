function tinhChenhLechNgay(ngay1, ngay2) {
    // Tạo đối tượng Date từ chuỗi ngày tháng năm
    let date1 = new Date(ngay1);
    let date2 = new Date(ngay2);
  
    // Kiểm tra xem ngày nhập vào có hợp lệ không
    if (isNaN(date1) || isNaN(date2)) {
      return "Ngày nhập vào không hợp lệ!";
    }
  
    // Tính chênh lệch thời gian (đơn vị: mili giây)
    let chenhLechMiliGiay = Math.abs(date2 - date1);
  
    // Chuyển đổi chênh lệch mili giây sang ngày
    let chenhLechNgay = Math.floor(chenhLechMiliGiay / (1000 * 60 * 60 * 24));
  
    return `Độ lệch là ${chenhLechNgay} ngày`;
  }
  
  // Ví dụ sử dụng
  let ngay1 = "2025-02-26";
  let ngay2 = "2025-02-28";
  
  let ketQua = tinhChenhLechNgay(ngay1, ngay2);
  console.log(ketQua);