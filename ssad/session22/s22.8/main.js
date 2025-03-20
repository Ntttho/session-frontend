let t = 10;
let arr = new Array(t);
for (var i = 0; i < t; i++) {
  arr[i] = Math.ceil(Math.random() * 10);
}
console.log(arr);
let result;
let countMax = 0;
for (var i = 0; i < arr.length; i++) {
  count = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count += 1;
    }
  }
  if (count > countMax) {
    countMax = count;
    result = arr[i];
  } else if (count === countMax) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
}
console.log(result);
