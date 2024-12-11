//sign in

var allUsers = JSON.parse(localStorage.getItem("users")),
    loginBtn = document.getElementById("loginBtn"),
    emailInputLogin = document.getElementById("emailInputLogin"),
    passInputLogin = document.getElementById("passInputLogin");

function checkToLogin() {
    if (
        emailInputLogin.value.trim() === "" ||
        passInputLogin.value.trim() === ""
    ) {
        document.querySelector(".alert-login").innerHTML =
            "All fields are required";
        return;
    }else{
    for (var i = 0; i < allUsers.length; i++) {
        if (emailInputLogin.value === allUsers[i].mail) {
            if (passInputLogin.value === allUsers[i].password) {
                localStorage.setItem("userName", allUsers[i].name);
                localStorage.setItem("index", i);
                window.open("./home.html", "_self");
                return;
            } else {
                document.querySelector(".alert-login").innerHTML =
                    "The password is incorrect.";
                passInputLogin.value = "";
                return;
            }
        }
    }
    document.querySelector(".alert-login").innerHTML =
        "The email is incorrect or user not found.";
    emailInputLogin.value = "";
    passInputLogin.value = "";

}
}

loginBtn.addEventListener("click", function () {
    login();
});

function login() {
    checkToLogin();
}

emailInputLogin.addEventListener("input", function () {
    document.querySelector(".alert-login").innerHTML = "";
});

passInputLogin.addEventListener("input", function () {
    document.querySelector(".alert-login").innerHTML = "";
});
