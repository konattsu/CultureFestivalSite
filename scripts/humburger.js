const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");
if (burger) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
    });
}

if (overlay) {
    overlay.addEventListener("click", () => {
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
        overlay.classList.remove("is-active");
    });
}

const color_theme = document.querySelector("#toggle-theme");
if (color_theme) {
    const body = document.querySelector("#body");
    color_theme.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
    });
}
