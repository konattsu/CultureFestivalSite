var lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
        header.classList.add("is-show");
    } else {
        header.classList.remove("is-show");
    }
    lastScrollY = window.scrollY;
});
