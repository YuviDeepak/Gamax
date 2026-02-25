let registerArray = JSON.parse(localStorage.getItem("registerArray")) || []
let product_list_array = JSON.parse(localStorage.getItem("product_list")) || []
let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

console.log(registerArray.length);

document.querySelector(".UserRegistration").innerText=registerArray.length
document.querySelector(".TotalProduct").innerText=product_list_array.length
document.querySelector(".TotalCategory").innerText=CatArray.length
function totstocks(){
    let ts=0
    product_list_array.forEach(element => {
        
        ts+=Number(element.stock)
    });
    return ts
}
document.querySelector(".TotalStocks").innerText=totstocks()

 