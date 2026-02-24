// document.addEventListener("DOMContentLoaded", function(){
    createCard();
// });






function createCard() {
        cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
        let cartCount=document.querySelector(".cartCount")
        cartCount.innerText=cartArray.length
        
        
        let duplicateCard = ''
        if(cartArray.length>0){
        cartArray.forEach(element => {
            duplicateCard+=`
            <div class="cartBox">
            <div class="left">
                <div class="card" data-id="${element.productId}">
                    <div class="card-top">
                        <b class="discount">
                            <p class="offer">${element.offer}</p>% off
                        </b>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <img src="${element.img}" alt="">
                        <div class="content">
                            <h2 class="cardProductName">${element.name}</h2>
                            <h4 class="cardCategory">${element.category}</h4>
                        </div>
                    </div>
                    <div class="card-bottom">

                        <div class="pri">
                            <p>$<del class="price">${element.price}</del></p>
                            <b>$<span class="offerPrice">${element.offerPrice}</span></b>
                        </div>



                    </div>
                </div>

            </div>
            <div class="middlecart">
                <div class="prr">
                    <h3>Product Price : $${element.offerPrice}</h3>
                </div>
                <div class="qtybox">
                    <div class="pp">
                        <h3>Total : $${element.offerPrice*element.quantity}</h3>
                    </div>
                    <div class="btn">
                        <button onclick="subqty(${element.id})" id="sbqt">-</button>
                        <span class="quntity">${element.quantity}</span>
                        <button onclick="addqty(${element.id})" id="adqt">+</button>
                        
                    </div>
                </div>
            </div>
            <div class="right">
                <button type="button" id="cartRemove" onclick="cardRemove(${element.id})">Remove</button>
            </div>
        </div>
            `


        });
        

        let ttprice=0

        cartArray.forEach(e=>{
            ttprice+=e.offerPrice*e.quantity
        })
        duplicateCard+=`
        <div class="cartBox total">
            <div class="wholeAmount">
                <h1 class="whamt">$${ttprice}</h1>
            </div>
            <div class="WholeAmountBtn">
                <button type="button" onclick="tata()">Buy Now</button>
            </div>
        </div>
        
        `
    }
        else{
            duplicateCard+=`
            <div class="cartBox cartBoxbb1">
            <h1>Add items</h1>
            <button onclick="first()">+</button>
            </div>
            `
        }
    document.querySelector("#addcrtt").innerHTML = duplicateCard

        
        

    }

    function tata(){

        // let sure=confirm("Confirm the Purchase")
        // if(sure){
            // alert("Payment Successfull")
            // localStorage.removeItem("cartArray");   // clear cart
            // window.location.href = "index.html"; 

        // }
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Buy Now"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Purchase Successfull",
                showConfirmButton: false,
                timer: 2000
            });
                localStorage.removeItem("cartArray");   // clear cart
                createCard()
                // setTimeout(() => {
                    
                //     window.location.href = "index.html";
                // }, 2000);
              }
                 
            });
            

    }




    function addqty(iidd){
        cartArray = JSON.parse(localStorage.getItem("cartArray"))
        cartArray.forEach(e=>{
            if(e.id==iidd){
                if(e.quantity<10)
                    e.quantity++
                else{
                     Swal.fire({
                // position: "top-end",
                icon: "error",
                title: "Maximum Quantity reached",
                showConfirmButton: false,
                timer: 1200
            });
                }
                    // alert("Maximum Quantity reached")
               
            }
        })

        localStorage.setItem("cartArray", JSON.stringify(cartArray))
        createCard()
    }


    function subqty(iidd){
        cartArray = JSON.parse(localStorage.getItem("cartArray"))
        cartArray.forEach(e=>{
            if(e.id==iidd){
                if(e.quantity>1)
                    e.quantity--
                else{

                    Swal.fire({
                    // position: "top-end",
                    icon: "error",
                    title: "Minimum Quantity reached",
                    showConfirmButton: false,
                    timer: 1200
                });
                }
                    // alert("Manimum Quantity reached")
            }
        })

        localStorage.setItem("cartArray", JSON.stringify(cartArray))
        createCard()
    }






    function first(){
        window.location.href="index.html"
    }
    function cardRemove(prid){
        // let ask = confirm("Do you want to remove product")
        // if(ask){

            // let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
            //  cartArray = cartArray.filter((e)=>{
            //     if(e.id != prid){
            //         return e
            //     }
            // })
            // localStorage.setItem("cartArray", JSON.stringify(cartArray));
            // createCard()
        // }

        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove from cart"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Removed successfully",
                showConfirmButton: false,
                timer: 1500
            });
                let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
                cartArray = cartArray.filter((e)=>{
                if(e.id != prid){
                    return e
                }
            })
            localStorage.setItem("cartArray", JSON.stringify(cartArray));
            createCard()
              }
        });
    }

    // function addqty(iidd){
    //     cartArray = JSON.parse(localStorage.getItem("cartArray"))
    //     cartArray.forEach(e=>{
    //         if(e.id==iidd){
    //             e.quantity++
    //         }
    //     })

    //     localStorage.setItem("cartArray", JSON.stringify(cartArray))
       

    // }


