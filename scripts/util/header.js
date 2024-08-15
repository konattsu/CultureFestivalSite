var lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
    lastScrollY = window.scrollY;
});
