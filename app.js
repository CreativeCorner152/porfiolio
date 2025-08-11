


document.querySelector("body").style.overflow = "hidden";

setTimeout(() => {
  let hide = document.querySelector(".first-overlay");
  hide.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}, 2500);

setTimeout(() => {
  let topOverlay = document.querySelector(".top-overlay");
  topOverlay.style.transform = "translateY(-10%)";
}, 3500);

window.addEventListener('scroll', () => {
  let overlay = document.querySelector(".top-overlay");
  if (window.scrollY > 45) {
    overlay.style.transform = "translateY(-100%)";
  } else {
    overlay.style.transform = "translateY(-10%)";
  }
});


let sideNav = document.querySelector(".sidenav");
let open = document.getElementById("open-nav");
let close = document.getElementById("close-nav");
let body = document.body;
let mainContent = document.querySelector(".container");


  open.addEventListener("click", function () {
    console.log("work");
    sideNav.style.transform = "translateX(0%)";
    body.style.overflow = "hidden";
    mainContent.style.pointerEvents = "none";
  });
  close.addEventListener("click", function () {
    sideNav.style.transform = "translateX(100%)";
    body.style.overflow = "auto";
    mainContent.style.pointerEvents = "auto";
  });




