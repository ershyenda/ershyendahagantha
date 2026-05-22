// REGISTER
function registerUser(event) {

    event.preventDefault();

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // simpan akun
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registrasi berhasil!");

    window.location.href = "login.html";
}
// LOGIN

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = localStorage.getItem("userEmail");
const validPassword = localStorage.getItem("userPassword");

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
