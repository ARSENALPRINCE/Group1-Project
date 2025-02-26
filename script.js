let x = document.getElementById("nav-link-container");
let cl = document.getElementById("closeBtn");

function toggleMenu() {
    cl.style.display = "block"
    x.style.display = "block";
    x.style.width = "250px";
    x.style.position = "fixed";
    x.style.zIndex = "1";
    x.style.height = "550px";
    x.style.top = "0";
    x.style.left = "0";
    x.style.color = "#fff"
    x.style.backgroundColor = "#fafafa";
    x.style.overflowX = "hidden";
    x.style.transition = "0.5s";
    x.style.paddingTop = "60px";
}

function closeNav() {
  x.style.display = "none";
}


