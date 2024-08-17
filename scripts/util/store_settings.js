//! #bodyにあるクラスを一時的に保存

function storeSettings() {
    console.log("storeSettings is called");
    const body = document.querySelector("#body");
    const classNames = body.className;
    localStorage.setItem("settingsClass", classNames);
}
