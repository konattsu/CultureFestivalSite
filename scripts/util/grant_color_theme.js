function isDarkMode() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

const bodyForGrant = document.querySelector("#body");

if (!bodyForGrant.classList.contains("dark-theme" || "light-theme")) {
    if (isDarkMode()) {
        bodyForGrant.classList.add("dark-theme");
    } else {
        bodyForGrant.classList.add("light-theme");
    }
}
