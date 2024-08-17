//! 一時的に保存されたクラスを#bodyに返す

window.addEventListener("DOMContentLoaded", () => {
    const bodyForSettings = document.querySelector("#body");
    const savedClass = localStorage.getItem("settingsClass");
    if (savedClass) {
        savedClass = verifyConsistency(savedClass);
        console.log("fetched settings: %s", savedClass);
        bodyForSettings.classList = savedClass;
    } else {
        console.log("fetched settings is none");
    }
});
