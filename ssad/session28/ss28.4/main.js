// bai nay bai 3 nha
let book = {
  title: "JavaScript Basics",
  author: "John Smith",
  page: 200,
};
// xoa thuoc tinh page khoi ob book
delete book.page;

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}
