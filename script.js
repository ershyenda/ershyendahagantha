function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Data login sementara
    if(username === "admin" && password === "1234"){
        window.location.href = "home.html";
    }
    else{
        document.getElementById("error").innerText =
        "Username atau password salah";
    }
