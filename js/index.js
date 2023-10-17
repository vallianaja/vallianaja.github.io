// ========================= Animasi Navbar ===========================
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("nav");

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10vh"; // Sesuaikan dengan tinggi navbar
    }

    prevScrollPos = currentScrollPos;
}
// =====================================================================

// ========================= Animasi Text ===========================