


createbuy()

let lgot = document.querySelector("#lgot")
lgot.addEventListener("click",()=>{
    let sure = confirm("Do you want to Log Out")
    if(sure){

        window.location.href="../index.html"
    }
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
        else
            alert("You have reached the minimum quantity")
    }

    else if (Increase) {
        if(buynowObj.quantity<10)
            buynowObj.quantity++;
        else{
            alert("You have reached the maximum quantity")
        }
    }

    else{

    }


    localStorage.setItem("buynowObj", JSON.stringify(buynowObj));
    createbuy()
    
})

function end(){

    let su=confirm("Do you want to buy the product")
    if(su){

        alert("Payment Successful")
        window.location.href="index.html"
    }
    // let cc = confirm("Payment Successful")
    // if(cc){
    //     window.location.href="index.html"
    // }
}
