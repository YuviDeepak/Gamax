

// function cc(){
//     cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
//         let cartCount=document.querySelector(".cartCount")
//         cartCount.innerText=cartArray.length
// }

// cc()



const buttons = document.querySelectorAll("#shlt");
console.log(typeof buttons)
buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        // find nearest main parent
        const sop = btn.closest(".sop");

        // find shopleft inside THAT main only
        const shopleft = sop.querySelector(".shopleft");

        shopleft.classList.toggle("vb");
    });

});

document.addEventListener("DOMContentLoaded",  () =>{
    loadshop()
});

function loadshop() {

    let shopCategory = document.querySelector("#shopCategory")
    let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []
    console.log("hi=>", CatArray);

    let copyCat = `<option value="">Select Something</option>`
    // copyCat+=`

    // `
    CatArray.forEach(e => {
        copyCat += `
            <option value="${e}">${e}</option>
    `
    }
    )
    shopCategory.innerHTML=copyCat


}

document.querySelector("#shpoSearch").addEventListener("click",()=>{

    alert("hi")

})

