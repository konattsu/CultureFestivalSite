function isDarkMode() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

if (isDarkMode()) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.add("light-theme");
}
