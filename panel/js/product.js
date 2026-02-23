// let lgt=document.querySelector(".lgt")
// lgt.addEventListener("click",(e)=>{
//     let ssuurree=confirm("Do you want to logout")
//     if(ssuurree){
//         window.location.href="login.html"
//     }
// })

let product_list_array = JSON.parse(localStorage.getItem("product_list")) || []


//id
let pID = document.querySelector("#id")
// image
//in
let image = document.getElementById("image")
//er
let image_error = document.getElementById("image_error")

//product
//in
let product = document.getElementById("product")
//er
let product_error = document.getElementById("product_error")

//category
let category = document.getElementById("category")
createCategory()
function createCategory(){
    let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

    let sel=`
        <option value="">Select Something</option>
        `

    CatArray.forEach(e=>{
        sel+=`
        <option value="${e}">${e}</option>
        `
    })

    category.innerHTML=sel

}
//er
let category_error = document.getElementById("category_error")

//price
//in
let price = document.getElementById("price")
//er
let price_error = document.getElementById("price_error")

//stock
//in
let stock = document.getElementById("stock")
//er
let stock_error = document.getElementById("stock_error")

//offer
//in
let offer = document.getElementById("offer")
//er
let offer_error = document.getElementById("offer_error")

document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault()
    submit()
})

function isValidURL(aa){
    try{
        new URL(aa)
        return true
    }
    catch(err){
        return false
    }
}




function submit() {


    let isimage = false,
        isproduct = false,
        iscategory = false,
        isprice = false,
        isstock = false,
        isoffer = false


    // // image validation
    if (image.value === "") {
        image_error.innerText = "Enter the image url"
        image.style.border = "1px solid red"
        isimage = false
    }
    else if(!isValidURL(image.value.trim())){
        image_error.innerText = "Enter Valid URL(https://...)"
        image.style.border = "1px solid red"
        isimage = false
    }
    else {
        image_error.innerText = ""
        image.style.border = "1px solid black"
        isimage = true
    }

    // //product validation
    if (product.value === "") {
        product_error.innerText = "Enter the product name"
        product.style.border = "1px solid red"
        isproduct = false
    }
    else {
        product_error.innerText = ""
        product.style.border = "1px solid black"
        isproduct = true
    }

    // //category validation
    if (category.value === "") {
        category_error.innerText = "Enter the category"
        category.style.border = "1px solid red"
        iscategory = false
    }
    else {
        category_error.innerText = ""
        category.style.border = "1px solid black"
        iscategory = true
    }

    //price validation
    if (price.value === "") {
        price_error.innerText = "Enter the price"
        price.style.border = "1px solid red"
        isprice = false
    }
    else {
        price_error.innerText = ""
        isprice = true
        price.style.border = "1px solid black"

    }

    // //stock validation 
    if (stock.value === "") {
        stock_error.innerText = "Enter the stock"
        stock.style.border = "1px solid red"
        isstock = false
    }
    else {
        stock_error.innerText = ""
        isstock = true
        stock.style.border = "1px solid black"
    }

    // //offer validation
    if (offer.value === "") {
        offer_error.innerText = "Enter the offer"
        offer.style.border = "1px solid red"
        isoffer = false
    }
    else {
        offer_error.innerText = ""
        isoffer = true
        offer.style.border = "1px solid black"
    }

    if (isimage && isproduct && iscategory && isprice && isstock && isoffer) {
        if (pID.value == "") {
            let obj = {
                id: Date.now(),
                image: image.value,
                product: product.value,
                category: category.value,
                price: price.value,
                stock: stock.value,
                offer: offer.value
            }
            product_list_array.push(obj)
        }

        else {
            product_list_array = product_list_array.map((e) => {
                if (pID.value == e.id){
                    return{
                        id: pID.value,
                        image: image.value,
                        product: product.value,
                        category: category.value,
                        price: price.value,
                        stock: stock.value,
                        offer: offer.value
                    }
                }
                return e
            })
        }


        image.value = ""
        product.value = ""
        category.value = ""
        price.value = ""
        stock.value = ""
        offer.value = ""
        alert("Product Added")
        localStorage.setItem("product_list", JSON.stringify(product_list_array))




    }

    loadData()

}


let loadData = () => {

    let trow = ""
    if (product_list_array.length > 0) {

        product_list_array.forEach((e) => {
            trow +=
                `
            <tr>
                <td>${e.id}</td>
                <td><img src="${e.image}" alt=""></td>
                <td>${e.product}</td>
                <td>${e.category}</td>
                <td>${e.price}</td>
                <td>${e.stock}</td>
                <td>${e.offer}</td>
                <td>
                    <button type="button" onclick="upte(${e.id})">Update</button>
                    <button type="button" onclick="delt(${e.id})">Delete</button>
                </td>
            </tr> 
        `
        });

    }
    else {
        trow +=
            `
        <tr>
            <td colspan="8" align="center">No Record Found</td>
        </tr>
        `

    }
    document.querySelector("#tablebody").innerHTML = trow




}

function upte(proid) {



    let upproduct = product_list_array.find((e) => e.id == proid)

    

    if (upproduct) {
        pID.value = upproduct.id
        image.value = upproduct.image
        product.value = upproduct.product
        category.value = upproduct.category
        price.value = upproduct.price
        stock.value = upproduct.stock
        offer.value = upproduct.offer

    }

}





function delt(proid) {

    let sure = confirm("do you want to Delete Product id?")
    if (sure) {
        product_list_array = product_list_array.filter((e) => {
            if (e.id != proid) {
                return e
            }
        })
        localStorage.setItem("product_list", JSON.stringify(product_list_array))
        loadData()
    }
    else {
        alert("Your Product is safe")
    }
}

loadData();