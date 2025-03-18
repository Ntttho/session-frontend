let p = +prompt("nhap vao 1 so kiem tra");
let check =
  Math.sqrt(p) == Math.floor(Math.sqrt(p)) ? "ketquadung" : "ketquasai";

document.writeln(check +"\n");
