let lgot = document.querySelector("#lgot")
lgot.addEventListener("click",()=>{
    let sure = confirm("Do you want to Log Out")
    if(sure){

        window.location.href="../index.html"
    }
})
let carArray = JSON.parse(localStorage.getItem("cartArray")) || [];
let cartCount=document.querySelector(".cartCount")
cartCount.innerText=carArray.length

let goToCart=document.querySelector("#goToCart")

goToCart.addEventListener("click",()=>{
    window.location.href='addToCart.html'
})