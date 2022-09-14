let btn_burger = document.getElementById("btn-burger");

btn_burger.addEventListener("click", function(event) {
    document.getElementById("nav-burger").style.display = "flex";
    console.log("cliquei");
})