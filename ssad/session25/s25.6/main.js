let string = prompt("nhap vao mot chuoi kiem tra doi xung");
function isPalindrome(string) {
  //dao nguoc chuoi lai
  let reverseString = string.split('').reverse().join('');
  if(reverseString === string){
    return `chuoi doi xung`;
  } else{
    return `chuoi khong doi xung`;
  }
}

console.log(isPalindrome(string));