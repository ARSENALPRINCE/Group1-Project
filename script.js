let x = document.getElementById("nav-link-container");
let cl = document.getElementById("closeBtn");

function toggleMenu() {
    cl.style.display = "block"// Show the close button//
    x.style.display = "block";// Show the menu//
    x.style.width = "250px";// Set the menu width//
    x.style.position = "fixed";// Fix the menu position on the screen//
    x.style.zIndex = "1";// Bring the menu to the front//
    x.style.height = "550px";// Set menu height//
    x.style.top = "0";// Align to the top//
    x.style.left = "0";// Align to the left//
    x.style.color = "#fff"
    x.style.backgroundColor = "#fafafa ";// Set background color//
    x.style.overflowX = "hidden"; // Prevent horizontal scrolling//
    x.style.transition = "0.5s"; // Smooth animation effect//
    x.style.paddingTop = "60px"; // Smooth animation effect//
}

function closeNav() {
  x.style.display = "none";
}


