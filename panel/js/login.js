
let logInemail = document.querySelector("#logInemail")
let loginPassword = document.querySelector("#loginPassword")

let EmailError = document.querySelector("#EmailError")
let PasswordError = document.querySelector("#PasswordError")

let logInBtnYes = document.querySelector("#logInBtnYes")
let goToRegister = document.querySelector("#goToRegister")


logInBtnYes.addEventListener("click", (e) => {
    e.preventDefault()
    login()
})

// document.querySelector("#goToRegister").addEventListener("click",()=>{
//     window.location.href="register.html"
// })

document.querySelector("#goToUserLogin").addEventListener("click",()=>{
    window.location.href="../index.html"
})

function login() {
    // debugger
    let islogInemail = false
    let isloginPassword = false
    let registerArray = JSON.parse(localStorage.getItem("registerArray")) || []
    if (logInemail.value == "") {
        EmailError.innerText = "Fill the box"
        logInemail.style.border = "1px solid red"
    }

    else if(logInemail.value=="admin"){
        EmailError.innerText = ""
        logInemail.style.border = "1px solid black"
        islogInemail = true
    }

    else {
        EmailError.innerText = "Invalid User Name"
        logInemail.style.border = "1px solid red"
        // alert("Invalid Username")
    }
    if (loginPassword.value == "") {
        PasswordError.innerText = "Fill the box"
        loginPassword.style.border = "1px solid red"
    }

    else if(loginPassword.value=="1234"){
        PasswordError.innerText = ""
        loginPassword.style.border = "1px solid black"
        isloginPassword = true
    }

    else {
        PasswordError.innerText = "Ivalid Password"
        loginPassword.style.border = "1px solid red"
        // alert("Invalid Password")
    }

    if (isloginPassword && islogInemail) {

        let useremail = logInemail.value
        let userpassword = loginPassword.value
        console.log(useremail);
        console.log(userpassword);


        // let user = registerArray.find(
        //     e => e.userEmail === useremail &&
        //         e.userPassword === userpassword
        // )

        // if (user) {
            window.location.href="../panel/index.html"
        // }
        
        
    }

    
    // else {
    //     alert("Invalid Email or Password")
    // }


}