let form = document.getElementById("register");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let ob = {}
    ob.email = form.email.value;
    ob.pass = form.pass.value;
    let passconfirm = form.confirm.value;
    if(checkemail(ob.email) === 1 && checkPassword(ob.pass)){
        if(ob.pass === passconfirm){
            let ob2 = JSON.stringify(ob)
            localStorage.setItem("email",ob2)
            form.email = "";
            form.pass = "";
            form.passconfirm = "";
        }else{
            alert("khong thanh cong")
        }
    }else{
        alert("khong thanh cong")

    }
});
function checkemail(str) {
    if (str.length === 0) {
        return 0;
    }
    if (/["@"]/.test(str) &&
        /[1-9]/ &&
        /[a-z]/.test(str) &&
        (str.endsWith(".com") || str.endsWith(".vn"))) {
        return 1;
    } else {
        return 0;
    }
}
function checkPassword(password) {
    if (password.length <= 6) {
        return 0; 
    }
    if (!/[A-Z]/.test(password)) {
        return 0; 
    }
    if (!/[a-z]/.test(password)) {
        return 0
    }
    if (!/[0-9]/.test(password)) {
        return 0; 
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 0; 
    }
    return 1;
}
