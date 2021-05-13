let menuIco = document.querySelector(".header__burger");
let menuOpen = document.querySelector(".header__menu")
let menuClose = document.querySelector(".header__close-btn")

    menuIco.addEventListener("click", function () {
        menuOpen.style.display="block";
    })

    menuClose.addEventListener("click", function () {
        menuOpen.style.display="none";
    })