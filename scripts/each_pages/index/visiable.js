window.addEventListener("scroll", () => {
    document.querySelectorAll("h2").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            section.classList.add("visible");
        }
    });
});
