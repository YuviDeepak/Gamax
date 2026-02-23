
let logInemail = document.querySelector("#logInemail")
let loginPassword = document.querySelector("#loginPassword")

let EmailError = document.querySelector("#EmailError")
let PasswordError = document.querySelector("#PasswordError")

let logInBtnYes = document.querySelector("#logInBtnYes")
let goToAdminLogin = document.querySelector("#goToAdminLogin")


logInBtnYes.addEventListener("click", (e) => {
    e.preventDefault()
    login()
})

document.querySelector("#goToRegister").addEventListener("click",()=>{
    window.location.href="./register.html"
})

goToAdminLogin.addEventListener("click",()=>{
    window.location.href="./panel/login.html"
})

function login() {
    let islogInemail = false
    let isloginPassword = false
    let registerArray = JSON.parse(localStorage.getItem("registerArray")) || []
    if (logInemail.value == "") {
        EmailError.innerText = "Fill the box"
        logInemail.style.border = "1px solid red"
    }

    else {
        EmailError.innerText = ""
        logInemail.style.border = "1px solid black"
        islogInemail = true
    }
    if (loginPassword.value == "") {
        PasswordError.innerText = "Fill the box"
        loginPassword.style.border = "1px solid red"
    }

    else {
        PasswordError.innerText = ""
        loginPassword.style.border = "1px solid black"
        isloginPassword = true
    }
if (isloginPassword && islogInemail) {

    let useremail = logInemail.value;
    let userpassword = loginPassword.value;

    // Check email first
    let user = registerArray.find(e => 
        e.userEmail === useremail
    );

    if (!user) {
        
        EmailError.innerText = "Invalid Email"
        EmailError.style.color="red"
        logInemail.style.border = "1px solid red"
        alert("Invalid Email");

    } 
    else if (user.userPassword !== userpassword) {
        PasswordError.innerText = "Invalid Password"
        loginPassword.style.border = "1px solid red"
        alert("Invalid Password");
    } 
    else {
        window.location.href = "./site/index.html";
    }
}



}