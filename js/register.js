//inpname
let RegName = document.querySelector("#RegName")
//name error
let RegNameError = document.querySelector("#RegNameError")
//ck
let isRegName = false

//inp email
let Regemail = document.querySelector("#Regemail")
//email error
let RegEmailError = document.querySelector("#RegEmailError")
//ck
let isRegemail = false

//inp ph
// let Regphno = document.querySelector("#Regphno")
// //ph error
// let RegphnoError = document.querySelector("#RegphnoError")
// //ck
// let isRegphno = false

//inp pass
let RegPassword = document.querySelector("#RegPassword")
//pass error
let RegPasswordError = document.querySelector("#RegPasswordError")
//ck
let isRegPassword = false

//inp passcon
let RegPasswordCon = document.querySelector("#RegPasswordCon")
//pass errorcon
let RegPasswordConError = document.querySelector("#RegPasswordConError")
//ck
let isRegPasswordCon = false

let RegBtnYes = document.querySelector("#RegBtnYes")

let goToLogin=document.querySelector("#goToLogin")

RegBtnYes.addEventListener("click", (e) => {
    e.preventDefault()
    register()
})

goToLogin.addEventListener("click",(e)=>{
    window.location.href="./index.html"
})

// let goToSite=document.querySelector("#goToSite")
// goToSite.addEventListener("click",(e)=>{
//     e.preventDefault()
//     window.location.href="../site/index.html"
// })
///

// function isValidURL(aa){
//     try{
//         new URL(aa)
//         return true
//     }
//     catch(err){
//         return false
//     }
// }

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// let phregex=/^[6-9]\\d{9}$/


function register() {

    let registerArray = JSON.parse(localStorage.getItem("registerArray")) || []

    isRegName = false
    isRegemail = false
    // isRegphno = false
    isRegPassword = false
    isRegPasswordCon = false

    if (RegName.value == "") {
        RegNameError.innerText = "Fill the box"
        RegName.style.border = "1px solid red"
    }
    else {
        RegNameError.innerText = ""
        RegName.style.border = "1px solid black"
        isRegName = true
    }

    if (Regemail.value == "") {
        RegEmailError.innerText = "Fill the box"
        Regemail.style.border = "1px solid red"
    }
    else if (regex.test(Regemail.value)){
        RegEmailError.innerText = ""
        Regemail.style.border = "1px solid black"
        isRegemail = true
    }
    else {
        RegEmailError.innerText = "Invalid email"
        Regemail.style.border = "1px solid red"
    }

    // if (Regphno.value == "") {
    //     RegphnoError.innerText = "Fill the box"
    //     Regphno.style.border = "1px solid red"
    // }
    // else if(phregex.test(Regphno.value)){
    //     RegphnoError.innerText = ""
    //     Regphno.style.border = "1px solid black"
    //     isRegphno = true
    // }
    // else {
    //     RegphnoError.innerText = "Invlid Phone Number"
    //     Regphno.style.border = "1px solid red"
    // }

    if (RegPassword.value == "") {
        RegPasswordError.innerText = "Fill the box"
        RegPassword.style.border = "1px solid red"
    }
    else if((RegPassword.value).length>=8){
        RegPasswordError.innerText = ""
        RegPassword.style.border = "1px solid black"
        isRegPassword = true
    }
    else {
        RegPasswordError.innerText = "password should be 8 characters"
        RegPassword.style.border = "1px solid red"
    }

    if (RegPasswordCon.value == "") {
        RegPasswordConError.innerText = "Fill the box"
        RegPasswordCon.style.border = "1px solid red"
    }
    else if (RegPassword.value !== RegPasswordCon.value) {
        RegPasswordConError.innerText = "Passwords do not match"
        RegPasswordCon.style.border = "1px solid red"
    }
    else {
        RegPasswordConError.innerText = ""
        RegPasswordCon.style.border = "1px solid black"
        isRegPasswordCon = true
    }

    if (isRegName && isRegemail && isRegPassword && isRegPasswordCon) {
        let obj = {
            userName: RegName.value,
            userEmail: Regemail.value,
            // userPhno: Regphno.value,
            userPassword: RegPassword.value,
            userConfirmPassword: RegPasswordCon.value
        }

        console.log(obj);




        let occuremail = registerArray.find(e => e.userEmail == obj.userEmail)
        

        if (!occuremail) {
            registerArray.push(obj)
            localStorage.setItem("registerArray", JSON.stringify(registerArray));
            alert("Registeration Successfull")
            window.location.href="index.html"
        }
        else {
            alert("already Exist")
        }


    }


}