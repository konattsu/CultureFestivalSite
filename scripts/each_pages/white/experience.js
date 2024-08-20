// rgb お試しするやつ
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");
const colorPreview = document.getElementById("color-preview");

function updateColor() {
    const red = parseInt(redSlider.value).toString(16).padStart(2, "0");
    const green = parseInt(greenSlider.value).toString(16).padStart(2, "0");
    const blue = parseInt(blueSlider.value).toString(16).padStart(2, "0");
    const backgroundColor = `#${red}${green}${blue}`;
    colorPreview.style.backgroundColor = backgroundColor;
    redValue.textContent = generateString(red);
    greenValue.textContent = generateString(green);
    blueValue.textContent = generateString(blue);
}

function generateString(color) {
    return parseInt(color, 16) + " 0x" + color;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

updateColor();
