let btn_burgerOpen = document.getElementById("btn-burger");
let btn_burgerClose = document.getElementById("btn-burger_light-mode");

btn_burgerOpen.addEventListener("click", function(event) {
    document.getElementById("nav-burger").style.display = "flex";
    document.body.style.overflow = "hidden";
})

btn_burgerClose.addEventListener("click", function(event) {
    document.getElementById("nav-burger").style.display = "none";
    document.body.style.overflow = "auto";
})

