
let barIcon=document.querySelector("#barIcon")

let flex1=document.querySelector(".flex1")
barIcon.addEventListener("click",()=>{
    flex1.classList.toggle("tog")
})


let lgt=document.querySelector(".lgt")
lgt.addEventListener("click",(e)=>{
    let ssuurree=confirm("Do you want to logout")
    if(ssuurree){
        window.location.href="login.html"
    }
})


setInterval(() => {
    document.getElementById("time").innerText=new Date().toLocaleTimeString()
}, 1000);