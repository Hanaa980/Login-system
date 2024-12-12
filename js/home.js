
if (localStorage.getItem("userName")) {
    document.querySelector(".text-home").innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}
var logOut = document.getElementById("logOut")

logOut.addEventListener("click", function () {
    localStorage.removeItem("userName")
    window.location.replace("./index.html")
})
