function isDarkMode() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

const bodyForGrant = document.querySelector("#body");

if (!bodyForGrant.classList.contains("dark-theme" || "light-theme")) {
    if (isDarkMode()) {
        console.log("Selected dark theme");
        bodyForGrant.classList.add("dark-theme");
    } else {
        console.log("Selected light theme");
        bodyForGrant.classList.add("light-theme");
    }
} else {
    console.log(
        "Retrieving the theme from the terminal is skipped because it has already been retrieved",
    );
}

/// @brief: ダークモードとライトモードが二つ存在しないか確認
///   二つ存在するときはデバイスのカラーテーマが余分に付与されているので消す
/// @param: String, querySelectorで取ってきたもの
/// @return: String, paramの整合性を合わせたもの
function verifyConsistency(savedClass) {
    if (
        savedClass.includes("dark-theme") &&
        savedClass.includes("light-theme")
    ) {
        if (isDarkMode()) {
            console.log("remove `dark-theme` class");
            savedClass = savedClass.replace("dark-theme", "").trim();
        } else {
            console.log("remove `light-theme` class");
            savedClass = savedClass.replace("light-theme", "").trim();
        }
    } else {
        console.log("the consistency is right");
    }
    return savedClass;
}
