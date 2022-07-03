// var menuBtn = document.querySelector("menuBtn");
// var menuBtn = document.querySelector("sideNav");
// var menuBtn = document.getElementById("menuu");

sideNav.style.right = "-300px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-300px") {
        sideNav.style.right = "0";
        menuu.src = "./img/close.png"
    }
    else {
        sideNav.style.right = "-300px";
        menuu.src = "./img/menu.png"
    }
}