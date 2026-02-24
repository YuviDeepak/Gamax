let lgot = document.querySelector("#lgot")
lgot.addEventListener("click", () => {
    // let sure = confirm("Do you want to Log Out")
    // if (sure) {

    //     window.location.href = "../index.html"
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
let carArray = JSON.parse(localStorage.getItem("cartArray")) || [];
let cartCount = document.querySelector(".cartCount")
cartCount.innerText = carArray.length

let goToCart = document.querySelector("#goToCart")

goToCart.addEventListener("click", () => {
    window.location.href = 'addToCart.html'
})