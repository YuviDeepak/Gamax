let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
// let cartCount=document.querySelector(".cartCount")
// cartCount.innerText=cartArray.length
SiteCreateCard();

let swiper = document.querySelector(".swiper")
let banId = document.getElementById("ban-id")
let slider = document.querySelector(".slider")
let prv = document.getElementById("prv")
let nxt = document.getElementById("nxt")

let cards = slider.querySelectorAll(".card")

let totalslides = cards.length

cards.forEach(card => {
    card.style.transform = "scale(0.4)";
});

cards[0].style.transform = "scale(1)"
cards[1].style.transform = "scale(0.6)"
cards[2].style.transform = "scale(0.4)"

let stimg = cards[0].querySelector("img")
banId.src = stimg.src

let current = 0;

let updateslide = () => {
    let slidewidth = cards[0].offsetWidth + 20;

    slider.style.transform = `translateX(-${current * slidewidth}px)`;
    slider.style.transition = "all 1s ease";

    // Reset all cards
    cards.forEach(card => {
        card.style.transform = "scale(0.4)";
    });

    // Current card
    cards[current].style.transform = "scale(1)";

    // Safe next index
    let nextIndex = (current + 1) % totalslides;

    // Safe previous index
    let prevIndex = (current - 1 + totalslides) % totalslides;

    cards[nextIndex].style.transform = "scale(0.6)";
    cards[prevIndex].style.transform = "scale(0.6)";

    // Update banner
    let img = cards[current].querySelector("img");
    if (img) {
        banId.src = img.src;
    }

}


nxt.addEventListener("click", () => {
    if (current < totalslides - 1) {
        current++
    }
    else {
        current = 0
    }
    updateslide()
})

prv.addEventListener("click", () => {
    if (current > 0) {
        current--
    }
    else {
        current = totalslides - 1
    }
    updateslide()
})

// let goToCart=document.querySelector("#goToCart")

// goToCart.addEventListener("click",()=>{
//     window.location.href='addToCart.html'
// })




document.querySelectorAll(".product-box").forEach(box=>{
    SiteCreateCard();
    box.addEventListener("click",(e)=>{
    let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []      
    let buyBtn=e.target.closest(".buynow")
    let adBtn =e.target.closest(".addtocart")
   
        if(adBtn){
            let card = adBtn.closest(".card")
            let productId = card.dataset.id;
            let exist=cartArray.find(e=> e.id==productId)
            if(!exist){
                let newproduct=createProduct(card,productId)
                NewCartElement(newproduct,cartArray)
                cartCount.innerText=cartArray.length
                alert("Product added to the cart")
            }
            else{
                alert("Product already added to the Cart")
            }
        }
        else if(buyBtn){
            let card = buyBtn.closest(".card")
            let productId = card.dataset.id;
            let newproduct=createProduct(card,productId)
            newBuyElement(newproduct)
        }
        else{
            return
        }
    })
})

function createProduct(card,productId){
    let product = {
        id: productId,
        img: card.querySelector("img").src,
        name: card.querySelector(".cardProductName").innerText,
        category: card.querySelector(".cardCategory").innerText,
        price: Number(card.querySelector(".price").innerText),
        offerPrice: Number(card.querySelector(".offerPrice").innerText),
        offer: card.querySelector(".offer").innerText,
        quantity: 1,
    };
    return product
}

function NewCartElement(newproduct,cartArray){
    cartArray.push(newproduct)
    localStorage.setItem("cartArray",JSON.stringify(cartArray))
}

function newBuyElement(newproduct){
    localStorage.setItem("buynowObj", JSON.stringify(newproduct))
    window.location.href="buy.html"
}



function SiteCreateCard(){
    let product_list_array = JSON.parse(localStorage.getItem("product_list")) || []

    let dupAdmCard=""

    product_list_array.forEach(e=>{
        dupAdmCard+=`
            <div class="card" data-id="${e.id}">
                <div class="card-top">
                    <b class="discount">
                        <p class="offer">50</p><p>%off</p>
                    </b>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <img src="${e.image}" alt="">
                    <div class="content">
                        <h2 class="cardProductName">${e.product}</h2>
                        <h4 class="cardCategory">${e.category}</h4>
                    </div>
                    <div class="icons">
                        <div class="card-adc it">
                            <button type="button" class="addtocart"><i
                                    class="fa-solid fa-cart-plus"></i></button>
                                    
                        </div>
                        <div class="card-fav it">
                            <button><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card-bottom">

                    <div class="pri">
                        <p>$<del class="price">${e.price}</del></p>
                        <b>$<span class="offerPrice">${e.offer}</span></b>
                    </div>
                    <button type="button" class="buynow" >Buy Now</button>


                </div>
            </div>
        `
    })

   document.querySelector(".product-box-1").innerHTML = dupAdmCard;

}


document.querySelector(".console").addEventListener("click",(e)=>{
     let FINDOUTMORE=e.target.closest("#FINDOUTMORE")
     if(FINDOUTMORE){
        window.location.href="shop.html"
     }
})





document.querySelectorAll(".CarouselContainer").forEach(box=>{
    let CurrentSlideValue=0
    box.addEventListener("click",(e)=>{
        let banbut=e.target.closest(".banbut")
        
        if(banbut){
            let BannerPrevious = e.target.closest(".BannerPrevious")
            let BannerNext = e.target.closest(".BannerNext")
            let BannerCollections=box.querySelector(".BannerCollections")
            BannerCollections.style.transition=`1s`
            if(BannerPrevious){
                // alert("prv")
                if(CurrentSlideValue>0){
                    CurrentSlideValue--
                    UPDATESLIDE(CurrentSlideValue,BannerCollections)
                }
                else{
                    CurrentSlideValue=BannerCollections.querySelectorAll(".BannerImages").length-1
                    BannerCollections.style.transition=`0s`
                    UPDATESLIDE(CurrentSlideValue,BannerCollections)
                }
            }
            else if(BannerNext){
                // alert("nxt")
                if(((BannerCollections.querySelectorAll(".BannerImages").length)-1)>CurrentSlideValue){
                    CurrentSlideValue++
                    UPDATESLIDE(CurrentSlideValue,BannerCollections)
                }
                else{
                    CurrentSlideValue=0
                    BannerCollections.style.transition=`0s`
                    UPDATESLIDE(CurrentSlideValue,BannerCollections)
                }
            }
        }

        else{
            return
        }

    })
})

function ImageWidth(BannerCollections){
    let BannerImages=BannerCollections.querySelectorAll(".BannerImages")
    let SingleImageWidth =BannerImages[0].offsetWidth
    return SingleImageWidth
}

function UPDATESLIDE(CurrentSlideValue,BannerCollections){
    let SingleImageWidth=ImageWidth(BannerCollections)
    let TransformValue=CurrentSlideValue*SingleImageWidth
    BannerCollections.style.transform = `translateX(-${TransformValue}px)`
    
}





























// document.querySelector(".product-box")
// .addEventListener("click", function (e) {

//     let addBtn = e.target.closest(".addtocart");
//     if (!addBtn) return;

//     let card = addBtn.closest(".card");

//     let productId = card.dataset.id;

//     let product = {
//         id: productId,
//         img: card.querySelector("img").src,
//         name: card.querySelector(".cardProductName").innerText,
//         category: card.querySelector(".cardCategory").innerText,
//         price: Number(card.querySelector(".price").innerText.replace("$", "")),
//         offerPrice: Number(card.querySelector(".offerPrice").innerText),
//         offer: card.querySelector(".offer").innerText,
//         quantity: 1,
//     };

//     let exist = cartArray.find(e => e.id === productId);

//     if (!exist) {
//         cartArray.push(product);
//         localStorage.setItem("cartArray", JSON.stringify(cartArray));
//         alert("Product Added to Cart");
//     } else {
//         alert("Product has been already added");
//     }

//     cartCount.innerText = cartArray.length;
// });


// let cartbtn = document.querySelectorAll(".addtocart")
// console.log(cartbtn);


// let cartArray=JSON.parse(localStorage.getItem("cartArray")) || []

// console.log(cartArray);



// cartbtn.forEach(element => {
    
//     element.addEventListener("click",()=>{
        

//         // alert("hi")
//         let card = element.closest(".card")
//         // console.log(card);
//         // console.log(card.dataset.id);
        
//         let productId = card.dataset.id
//         // console.log(productId);
        
//         let product ={
//             id:productId,
//             img:card.querySelector("img").src,
//             name:card.querySelector(".cardProductName").innerText,
//             category:card.querySelector(".cardCategory").innerText,
//             price:card.querySelector(".price").innerText,
//             offerPrice:card.querySelector(".offerPrice").innerText,
//             offer:card.querySelector(".offer").innerText,
//             quantity:1,
           
//         }

//         console.log("obj",product);
        

//         let exist = cartArray.find(e=>e.id === productId)
//         // console.log(exist);
        

//         if(!exist){

           
            
//             cartArray.push(product)
//             localStorage.setItem("cartArray", JSON.stringify(cartArray))
            

//             setTimeout(() => {
//                 alert("Product Added to Cart")
//             }, 300);
             
            
//         }
//         else{
//             alert("Product has been already added")
//         }
//         console.log(cartArray);
        
//         cartCount.innerText=cartArray.length
//     })

// });

// console.log(cartArray);

// let buynowBtns = document.querySelectorAll(".buynow")

// buynowBtns.forEach(e=>{
//     e.addEventListener("click",()=>{
//         // alert("hi")
//         let card =e.closest(".card")
//         let productId = card.dataset.id
//         let buynowObj = {
//             id:productId,
//             img:card.querySelector("img").src,
//             name:card.querySelector(".cardProductName").innerText,
//             category:card.querySelector(".cardCategory").innerText,
//             price:card.querySelector(".price").innerText,
//             offerPrice:card.querySelector(".offerPrice").innerText,
//             offer:card.querySelector(".offer").innerText,
//         }
//         localStorage.setItem("buynowObj", JSON.stringify(buynowObj))
//         console.log(buynowObj,"hello")
//         window.location.href="buy.html"

//     })
// })



// document.querySelectorALL(".product-box")
// .addEventListener("click", function (e) {

//     let buyBtn = e.target.closest(".buynow");
//     if (!buyBtn) return;

//     let card = buyBtn.closest(".card");
//     let productId = card.dataset.id;

//     let buynowObj = {
//         id: productId,
//         img: card.querySelector("img").src,
//         name: card.querySelector(".cardProductName").innerText,
//         category: card.querySelector(".cardCategory").innerText,
//         price: card.querySelector(".price").innerText,
//         offerPrice: card.querySelector(".offerPrice").innerText,
//         offer: card.querySelector(".offer").innerText,
//     };

//     localStorage.setItem("buynowObj", JSON.stringify(buynowObj));
//     window.location.href = "buy.html";
// });


// document.querySelectorAll(".product-box").forEach(box=>{
//     box.addEventListener("click",(e)=>{
//     let buyBtn = e.target.closest(".buynow");
//     let card = buyBtn.closest(".card");
//     let prdbx = buyBtn.closest(".product-box");
//     let buynowObj = {
//         id: productId,
//         img: card.querySelector("img").src,
//         name: card.querySelector(".cardProductName").innerText,
//         category: card.querySelector(".cardCategory").innerText,
//         price: card.querySelector(".price").innerText,
//         offerPrice: card.querySelector(".offerPrice").innerText,
//         offer: card.querySelector(".offer").innerText,
//     };
//     localStorage.setItem("buynowObj", JSON.stringify(buynowObj));
//     window.location.href = "buy.html";

// })
// })



// document.querySelectorAll(".product-box").forEach(box=>{
//     box.addEventListener("click",(e)=>{
//     let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []      
//     // let buyBtn=e.target.closest(".buynow")
//         let adBtn =e.target.closest(".addtocart")
//         if(adBtn){
//             let card = adBtn.closest(".card")
//             let productId = card.dataset.id;
//             let exist=cartArray.find(e=> e.id==productId)
//             if(!exist){
//                 let newproduct=createProduct(card,productId)
//                 NewCartElement(newproduct,cartArray)
//                 cartCount=cartArray.length
//                 alert("Product added to the cart")
//             }
//             else{
//                 alert("Product already added to the Cart")
//             }
//             // let newproduct=createProduct(card,productId)
//             // NewCartElement(newproduct,cartArray)
//         }
//         else{
//             return
//         }
//     })
// })

// function createProduct(card,productId){
//     let product = {
//         id: productId,
//         img: card.querySelector("img").src,
//         name: card.querySelector(".cardProductName").innerText,
//         category: card.querySelector(".cardCategory").innerText,
//         price: Number(card.querySelector(".price").innerText),
//         offerPrice: Number(card.querySelector(".offerPrice").innerText),
//         offer: card.querySelector(".offer").innerText,
//         quantity: 1,
//     };
//     return product
// }

// function NewCartElement(newproduct,cartArray){
//     cartArray.push(newproduct)
//     localStorage.setItem("cartArray",JSON.stringify(cartArray))
// }


// document.querySelectorAll(".product-box").forEach(box => {

//     box.addEventListener("click", (e) => {

//         let buyBtn = e.target.closest(".buynow");

//         // IMPORTANT SAFETY CHECK
//         if (!buyBtn) return;

//         let card = buyBtn.closest(".card");

//         let productId = card.dataset.id;

//         let buynowObj = {
//             id: productId,
//             img: card.querySelector("img").src,
//             name: card.querySelector(".cardProductName").innerText,
//             category: card.querySelector(".cardCategory").innerText,
//             price: card.querySelector(".price").innerText,
//             offerPrice: card.querySelector(".offerPrice").innerText,
//             offer: card.querySelector(".offer").innerText,
//         };

//         localStorage.setItem("buynowObj", JSON.stringify(buynowObj));

//         window.location.href = "buy.html";
//     });

// });


// document.querySelectorAll(".product-box").forEach(box=>{
//     box.addEventListener("click",e=>{
//        let addBtn = e.target.closest(".addtocart");
//     if (!addBtn) return;

//     let card = addBtn.closest(".card");

//     let productId = card.dataset.id;

//     let product = {
//         id: productId,
//         img: card.querySelector("img").src,
//         name: card.querySelector(".cardProductName").innerText,
//         category: card.querySelector(".cardCategory").innerText,
//         price: Number(card.querySelector(".price").innerText),
//         offerPrice: Number(card.querySelector(".offerPrice").innerText),
//         offer: card.querySelector(".offer").innerText,
//         quantity: 1,
//     };
//     // let product_list_array = JSON.parse(localStorage.getItem("product_list")) || []
//     // let ifprd= product_list_array.find(e=>e.id==productId)

//     let exist = cartArray.find(e => e.id === productId);

//     if (!exist) {
//         cartArray.push(product);
//         localStorage.setItem("cartArray", JSON.stringify(cartArray));
//         alert("Product Added to Cart");
//     } else {
//         alert("Product has been already added");
//     }

//     cartCount.innerText = cartArray.length;

//     })
// })


// SiteCreateCard()


// function SiteCreateCard(){
//     let product_list_array = JSON.parse(localStorage.getItem("product_list")) || []

//     let dupAdmCard=""

//     product_list_array.forEach(e=>{
//         dupAdmCard+=`
//             <div class="card" data-id="${e.id}">
//                 <div class="card-top">
//                     <b class="discount">
//                         <p class="offer">50</p><p>%off</p>
//                     </b>
//                     <div class="star">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                     </div>
//                     <img src="${e.image}" alt="">
//                     <div class="content">
//                         <h2 class="cardProductName">${e.product}</h2>
//                         <h4 class="cardCategory">${e.category}</h4>
//                     </div>
//                     <div class="icons">
//                         <div class="card-adc it">
//                             <button type="button" class="addtocart"><i
//                                     class="fa-solid fa-cart-plus"></i></button>
                                    
//                         </div>
//                         <div class="card-fav it">
//                             <button><i class="fa-solid fa-heart"></i></button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card-bottom">

//                     <div class="pri">
//                         <p>$<del class="price">${e.price}</del></p>
//                         <b>$<span class="offerPrice">${e.offer}</span></b>
//                     </div>
//                     <button type="button" class="buynow" >Buy Now</button>


//                 </div>
//             </div>
//         `
//     })

//    document.querySelector(".product-box-1").innerHTML = dupAdmCard;

// }

// buynowBtns.forEach(btn => {
//     btn.addEventListener("click", ()=> {
//             alert("hi")
    
//             let card = e.target.closest(".card")
//             let productId = card.dataset.id
            // let buynowObj ={
            //         id:productId,
            //         img:card.querySelector("img").src,
            //         name:card.querySelector(".cardProductName").innerText,
            //         category:card.querySelector(".cardCategory").innerText,
            //         price:card.querySelector(".price").innerText,
            //         offerPrice:card.querySelector(".offerPrice").innerText,
            //         offer:card.querySelector(".offer").innerText,


            // }
// //    let buynowObj=product
    // localStorage.setItem("buynowObj", JSON.stringify(buynowObj))
    // console.log(buynowObj,"hello")
//     // window.location.href="buy.html"
//     })
// })

// function buynowW(){
//     alert("hi")
//     // let buynowObj = JSON.parse(localStorage.getItem("buynowObj")) || {} || {}
//     let card = element.closest(".card")
//     let productId = card.dataset.id
//     let buynowObj ={
//             id:productId,
//             img:card.querySelector("img").src,
//             name:card.querySelector(".cardProductName").innerText,
//             category:card.querySelector(".cardCategory").innerText,
//             price:card.querySelector(".price").innerText,
//             offerPrice:card.querySelector(".offerPrice").innerText,
//             offer:card.querySelector(".offer").innerText,


//         }
// //    let buynowObj=product
//     localStorage.setItem("buynowObj", JSON.stringify(buynowObj))
//     console.log(buynowObj,"hello")
//     // window.location.href="buy.html"

// }


// cartCount.innerText=cartArray.length


// let allcards = document.querySelectorAll(".card");

// // console.log(allcards.length);

// // if(!localStorage.getItem("ProductArray")){
//     allcards.forEach(element => {
        
//         let ID = crypto.randomUUID();
//         element.dataset.productId = ID;

//         let obj = {
//             id: ID,
//             image: element.querySelector("img").src,
//             product: element.querySelector(".cardProductName").innerText,
//             category: element.querySelector(".price").innerText,
//             offer: element.querySelector(".offerPrice").innerText
//         };

//         saveToStorage(obj);
//     });
// // }

// function saveToStorage(product){
//     let ProductArray = JSON.parse(localStorage.getItem("ProductArray")) || []

      

//     let exist = ProductArray.find(e=>e.id===product.id)

//     if(!exist){
//         ProductArray.push(product)
//         localStorage.setItem("ProductArray", JSON.stringify(ProductArray))
//     }
//     else{
//         alert("item already Exixt")
//     }
// }

// console.log(JSON.parse(localStorage.getItem("ProductArray")));













