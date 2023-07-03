const menuBtn = document.getElementById("menu-icon");
const cancelBtn = document.getElementById("cancel-icon");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    cancelBtn.style.display = "flex";
    navMenu.style.display = "flex";

})

cancelBtn.addEventListener("click", () => {
    cancelBtn.style.display = "none";
    menuBtn.style.display = "flex";
    navMenu.style.display = "none";

})
