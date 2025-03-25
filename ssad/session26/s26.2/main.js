function filterStringsLongerThan5(arr) {
    if (!Array.isArray(arr)) {
      return "Dữ liệu không hợp lệ"; // Invalid data
    }
  
    if (arr.length === 0) {
      return "Mảng không có phần tử nào"; // Empty array
    }
  
    return arr.filter(str => typeof str === 'string' && str.length > 5);
  }
  
  // Test cases
  console.log(filterStringsLongerThan5(["apple", "banana", "cat", "elephant", "dog"])); // ["banana", "elephant"]
  console.log(filterStringsLongerThan5([])); // "Mảng không có phần tử nào"
  console.log(filterStringsLongerThan5("abc")); // "Dữ liệu không hợp lệ"