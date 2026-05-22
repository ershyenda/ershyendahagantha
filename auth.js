// LOGIN

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = "admin@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";

    } else {

        alert("Email atau password salah!");

    }
}

// CEK LOGIN
function checkLogin() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

    }
}

// LOGOUT
function logoutUser() {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";

}
