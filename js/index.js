var allUsers = JSON.parse(localStorage.getItem("users")) || [],
    loginBtn = document.getElementById("loginBtn"),
    emailInputLogin = document.getElementById("emailInputLogin"),
    passInputLogin = document.getElementById("passInputLogin");

function checkToLogin() {
  if (
    emailInputLogin.value.trim() === "" ||
    passInputLogin.value.trim() === ""
  ) {
    document.querySelector(".alert-login").innerHTML = "All fields are required";
    return;
  }

  if (allUsers.length === 0) {
    document.querySelector(".alert-login").innerHTML = "No account is registered with this email.";
    return;
  }

  var foundUser = false;
  for (var i = 0; i < allUsers.length; i++) {
    if (emailInputLogin.value === allUsers[i].mail) {
      foundUser = true;
      if (passInputLogin.value === allUsers[i].password) {
        localStorage.setItem("userName", allUsers[i].name);
        localStorage.setItem("index", i);
        window.open("./home.html", "_self");
        return;
      } else {
        document.querySelector(".alert-login").innerHTML = "Incorrect password.";
        passInputLogin.value = "";
        return;
      }
    }
  }

  if (!foundUser) {
    document.querySelector(".alert-login").innerHTML = "Incorrect email or password.";
  }
  emailInputLogin.value = "";
  passInputLogin.value = "";
}

loginBtn.addEventListener("click", function (){checkToLogin()});

emailInputLogin.addEventListener("input", function () {
  document.querySelector(".alert-login").innerHTML = "";
});

passInputLogin.addEventListener("input", function () {
  document.querySelector(".alert-login").innerHTML = "";
});
