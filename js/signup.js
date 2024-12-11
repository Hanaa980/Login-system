var Nameregex = /^[a-zA-Z\s]+$/;
var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var pass = /^[a-zA-Z0-9_]{6,15}$/;


var nameInput = document.getElementById("nameInput"),
    emailInputSup = document.getElementById("emialInputSignup"),
    passInputSup = document.getElementById("passInputSignUp"),
    alertText = document.querySelector(".alert"),
    signUp = document.getElementById("signUp"),
    allUsers = [];


if (localStorage.getItem("users")) {
    allUsers = JSON.parse(localStorage.getItem("users"))
} else {
    allUsers = []
}

signUp.addEventListener("click", function () {
    addUser()
});


function addUser() {

    if (nameInput.value.trim() === "" || emailInputSup.value.trim() === "" || passInputSup.value.trim() === "") {
        alertText.innerHTML = "All fields are required.";
        alertText.classList.remove("d-none");
        return;
    }


    if (!Nameregex.test(nameInput.value)) {
        alertText.innerHTML = "Name must contain letters only.";
        alertText.classList.remove("d-none");
        return;
    }


    if (!pass.test(passInputSup.value)) {
        alertText.innerHTML = "Password must be 6-15 characters long, and contain only letters and numbers.";
        alertText.classList.remove("d-none");
        return;
    }


    if (!regex.test(emailInputSup.value)) {
        alertText.innerHTML = "Invalid email format. Example: user@example.com.";
        alertText.classList.remove("d-none");
        return;
    }

    if (!checkData()) {
        alertText.innerHTML = "This email is already registered. Please use a different email.";
        alertText.classList.remove("d-none");
        return;
    }


    var user = {
        name: nameInput.value,
        mail: emailInputSup.value,
        password: passInputSup.value,
    };
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
    console.log(allUsers);

    clear();
    window.open("./index.html", "_self");
}



function clear() {
    nameInput.value = null;
    emailInputSup.value = null;
    passInputSup.value = null;

}

function checkData() {
    for (var i = 0; i < allUsers.length; i++) {
        if (emailInputSup.value == allUsers[i].mail) {
            return false
        }
    }
    return true
}

nameInput.addEventListener("input", function () {
    alertText.classList.add("d-none");

});

emailInputSup.addEventListener("input", function () {
    alertText.classList.add("d-none");

});

passInputSup.addEventListener("input", function () {
    alertText.classList.add("d-none");

});