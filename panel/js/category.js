// let lgt=document.querySelector(".lgt")
// lgt.addEventListener("click",(e)=>{
//     let ssuurree=confirm("Do you want to logout")
//     if(ssuurree){
//         window.location.href="login.html"
//     }
// })



let adminBtnCategory = document.querySelector("#adminBtnCategory")


let upteIndex=null
adminBtnCategory.addEventListener("click", (e) => {
    e.preventDefault()
    addCategory()
})
//inp
let adminCategory = document.querySelector("#adminCategory")
//er
let admnCat_error = document.querySelector("#admnCat_error")


function addCategory() {
    // debugger;
    let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []
    let ans=(CatArray.includes(adminCategory.value))
    if (adminCategory.value === "") {
        admnCat_error.innerText = "Fill the Category"
        adminCategory.style.border = "1px solid red"
    }
    // else if(ans){
    //     admnCat_error.innerText = "Category Already Exist"
    //     adminCategory.style.border = "1px solid red"
    // }
    else {

        if(upteIndex!=null){
            CatArray[upteIndex]=adminCategory.value
            upteIndex=null
            // alert("Category updated successfully")
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Category updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else{
            CatArray.push(adminCategory.value)
            // alert("Category added successfully")
             Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Category added successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        admnCat_error.innerText = ""
        adminCategory.style.border = "1px solid black"
        
        localStorage.setItem("CatArray", JSON.stringify(CatArray))
        adminCategory.value = ""
    }

    catDataTab() 
    
}

function catDataTab() {
    let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

    let trow = ""
    CatArray.forEach((e,index) => {
        trow += `
            <tr>
                <td>${e}</td>
                <td>
                    <button onclick="updatecategory(${index})">update</button>
                    <button onclick="removecategory('${e}')">Remove</button>
                </td>
            </tr>
        `
    });
    // localStorage.setItem("CatArray", JSON.stringify(CatArray))
    document.querySelector("#catTabel").innerHTML=trow

}

function updatecategory(index){
    // alert("hi")
    let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

    
    adminCategory.value=CatArray[index]

    upteIndex=index

    // addCategory()


}



function removecategory(cat){
    // let confir=confirm("Do you want to delete the product")
    // if(confir){

    //      let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

    // CatArray=CatArray.filter(e=>e!=cat)
    // localStorage.setItem("CatArray", JSON.stringify(CatArray))

    // catDataTab() 
    // alert("Category deleted successfully")
    Swal.fire({
          title: "Are you sure?",
          text: "Do you want to remove the Category",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
    }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Category has been deleted.",
              icon: "success"
            });
            let CatArray = JSON.parse(localStorage.getItem("CatArray")) || []

    CatArray=CatArray.filter(e=>e!=cat)
    localStorage.setItem("CatArray", JSON.stringify(CatArray))

    catDataTab() 
          }
        });
}

// else{
//         alert("Category is safe")

//     }
   

// }

catDataTab() 

