


createbuy()

let lgot = document.querySelector("#lgot")
lgot.addEventListener("click",()=>{
    // let sure = confirm("Do you want to Log Out")
    // if(sure){

    //     window.location.href="../index.html"
    // }
     Swal.fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        // confirmButtonColor: "#3085d6",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogOut"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            window.location.href = "../index.html"
        }
    });
})

function createbuy() {
    let buynowObj = JSON.parse(localStorage.getItem("buynowObj"))
    // console.log(buynowObj);
    
    let dupimg = ""
    if (buynowObj) {
        dupimg += `
        <div class="bbxx">
            <div class="whole">
                <div class="ig">
                    <img src="${buynowObj.img}" alt="">
                </div>

                <div class="price">
                    <h4>$<del>${buynowObj.price}</del></h4>
                    <h3>$${buynowObj.offerPrice}</h3>
                </div>

                <h3 class="ttoott">Total : ${buynowObj.offerPrice*buynowObj.quantity}</h3>
                
                <div class="QTYBOX">
                    <button class="Decrease" type="button">-</button>
                    <h1>${buynowObj.quantity}</h1>
                    <button class="Increase" type="button">+</button>
                </div>
                <div class="btn">
                    <button type="button" onclick="end()">Buy</button>
                </div>
            </div>
        </div>
        `
    }
    document.querySelector(".buyn").style.backgroundImage=`url(${buynowObj.img})`
    document.querySelector(".buyn").innerHTML = dupimg

}

document.querySelector("#addcrtt").addEventListener("click",(e)=>{
    let buynowObj = JSON.parse(localStorage.getItem("buynowObj"))
    let Decrease =e.target.closest(".Decrease")
    let Increase =e.target.closest(".Increase")
    if(Decrease){
        if(buynowObj.quantity>1)
            buynowObj.quantity--
        else{

                    Swal.fire({
                    // position: "top-end",
                    icon: "error",
                    title: "Minimum Quantity reached",
                    showConfirmButton: false,
                    timer: 1200
                });
                }
    }

    else if (Increase) {
        if(buynowObj.quantity<10)
            buynowObj.quantity++;
        else{

                    Swal.fire({
                    // position: "top-end",
                    icon: "error",
                    title: "Maximum Quantity reached",
                    showConfirmButton: false,
                    timer: 1200
                });
                }
    }

    else{

    }


    localStorage.setItem("buynowObj", JSON.stringify(buynowObj));
    createbuy()
    
})

function end(){

    // let su=confirm("Do you want to buy the product")
    // if(su){

    //     alert("Payment Successful")
    //     window.location.href="index.html"
    // }
    // // let cc = confirm("Payment Successful")
    // // if(cc){
    // //     window.location.href="index.html"
    // // }

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
                // localStorage.removeItem("cartArray");   // clear cart
                // createCard()
                setTimeout(() => {
                    
                    window.location.href = "index.html";
                }, 2100);
              }
                 
            });
}
