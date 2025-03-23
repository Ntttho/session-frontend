let string = window.prompt("nhap vao chuoi", "hello WORLD");
function capitalization(string) {
  //      viet hoa
  string = string.trim().toLowerCase();
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  string = string.join(" ");
  return string;
}

console.log(capitalization(string));
