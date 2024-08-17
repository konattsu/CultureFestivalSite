//! 一時的に保存されたクラスを#bodyに返す

window.addEventListener("DOMContentLoaded", () => {
    var bodyForSettings = document.querySelector("#body");
    var savedClass = localStorage.getItem("settingsClass");
    if (savedClass) {
        savedClass = verifyConsistency(savedClass);
        bodyForSettings.classList = savedClass;
    }
});
