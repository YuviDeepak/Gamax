
let barIcon=document.querySelector("#barIcon")

let flex1=document.querySelector(".flex1")
barIcon.addEventListener("click",()=>{
    flex1.classList.toggle("tog")
})


let lgt=document.querySelector(".lgt")
lgt.addEventListener("click",(e)=>{
    // let ssuurree=confirm("Do you want to logout")
    // if(ssuurree){
    //     window.location.href="login.html"
    // }
    Swal.fire({
  title: "Are you sure?",
  text: "Do you want to logout",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "LogOut"
}).then((result) => {
  if (result.isConfirmed) {
    let timerInterval;
    Swal.fire({
      title: "Logging Out",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
        setTimeout(() => {

            window.location.href="login.html"
        }, 2000);
      }
    });
    })


setInterval(() => {
    document.getElementById("time").innerText=new Date().toLocaleTimeString()
}, 1000);