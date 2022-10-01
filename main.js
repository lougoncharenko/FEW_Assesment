// Input Variables
const widthInput = document.getElementById("width-input")
const heightInput = document.getElementById("height-input")
const colorInput = document.getElementById('color-input')
//Display Variables
const displayWidthText = document.getElementById('display-width')
const displayHeightText = document.getElementById('display-height')
const displayColorText = document.getElementById('display-color')
//Update Variables
const box = document.getElementById('box')



const displayHeight = (e) => {
    displayHeightText.innerHTML = `${heightInput.value}px`;
    box.style.height = `${heightInput.value}px`;
}

const displayWidth = (e) => {
    displayWidthText.innerHTML = `${widthInput.value}px`;
    box.style.width = `${widthInput.value}px`;
}

const displayColor = (e) => {
    displayColorText.innerHTML = colorInput.value;
    box.style.backgroundColor = `${colorInput.value}`;
}



heightInput.addEventListener("input", displayHeight);
widthInput.addEventListener("input", displayWidth);
colorInput.addEventListener("input", displayColor);