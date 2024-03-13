function save() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
}

var savename = localStorage.getItem("Name");
var saveemail = localStorage.getItem("Email");
var savepass = localStorage.getItem("Password");

function logsave() {
    var logemail = document.getElementById('login-email').value;
    var logpassword = document.getElementById('login-pass').value;

    if (logemail === saveemail && logpassword === savepass) {
        alert("congrats you are successfuly login!")
    } else {
        alert("Invalid email or password")
    }
}

