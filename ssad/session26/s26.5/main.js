function timMaxVaIndexBangReduce(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "Mảng không hợp lệ hoặc rỗng.";
    }
  
    return arr.reduce((accumulator, currentValue, currentIndex) => {
      accumulator[0] = Math.max(accumulator[0],currentValue);
      accumulator[1] = accumulator[0] <= currentValue ? currentIndex : accumulator[1];
      return accumulator;
    }, [-Infinity, -1 ]); 
  }
  // khoi tao ham timMaxVaIndexBangReduce
  // condition 1 khoi ban cai
  // 6-8==============================
  // sử dụng reduce để có thể trả về 1 mảng chứa max trong array ban đầu cùng với index của max
  // ban đầu mang trả về arrResult là [-oo, -1] de dam bao tim thay gia tri max
  // qua mỗi lần lặp lấy ra giá trị max trong 2 giá trị (kết quả max trước và sau)
  // chỉ số mảng lấy bằng cách sử dụng toán tử 3 ngôi và lấy ra chỉ số của giá trị lớn hơn trong mảng ban đầu hoặc là chỉ số hiện tại của mảng trả về
  //
  console.log(timMaxVaIndexBangReduce([]));
  console.log(timMaxVaIndexBangReduce(""));
  console.log(timMaxVaIndexBangReduce([10,9,5,11,24,5]));
  //oke
  
  