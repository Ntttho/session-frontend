// session storage
console.log(sessionStorage);

sessionStorage.thuocTinh = "may thich giiiiiiiii?";
sessionStorage.thuocTinh = "may thich ?";

// delete sessionStorage.thuocTinh;
sessionStorage.removeItem("thuocTinh");
let student = [
    {id: 1, sty:"thich gi"},
    {id: 2, stu: "thich dam nhau"},
]
sessionStorage.studentlist = JSON.stringify(student);

let list = JSON.parse(sessionStorage.studentlist)
console.log(list);
localStorage.

