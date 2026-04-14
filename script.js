
let btn = document.querySelector("button");
let colorValue = document.querySelector(".color-value");
let hexCode = document.querySelector(".hex-code");
let box = document.querySelector(".color-box");
let history = [];
let previousColorsBox = document.querySelector(".previous-generated-colors");


let currentRgb = "";
let currentHex = "";


btn.addEventListener("click", function () {

    let colors = getRandomColor();
    currentRgb = colors.rgb;
    currentHex = colors.hex;


    colorValue.innerHTML = `${currentRgb} <i class="fa-regular fa-clipboard"></i>`;
    colorValue.style.backgroundColor = currentRgb;


    hexCode.innerHTML = `${currentHex} <i class="fa-regular fa-clipboard"></i>`;
    hexCode.style.backgroundColor = currentHex;


    box.style.background = currentRgb;
    history.unshift(currentRgb);
    history = history.slice(0, 5);
    previousColorsBox.innerHTML = "";
    history.forEach(function (e) {
        let previousColor = document.createElement("span");
        previousColor.style.backgroundColor = e;
        previousColorsBox.appendChild(previousColor);
    })

});


colorValue.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-clipboard")) {
        navigator.clipboard.writeText(currentRgb);
        colorValue.innerHTML = `${currentRgb} <i class="fa-solid fa-check"></i>`;
        setTimeout(function () {
            colorValue.innerHTML = `${currentRgb} <i class="fa-regular fa-clipboard"></i>`;
        }, 2000);
    }
});


hexCode.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-clipboard")) {
        navigator.clipboard.writeText(currentHex);
        hexCode.innerHTML = `${currentHex} <i class="fa-solid fa-check"></i>`;
        setTimeout(function () {
            hexCode.innerHTML = `${currentHex} <i class="fa-regular fa-clipboard"></i>`;
        }, 2000);
    }
});


function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    let hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`.toUpperCase();

    return { rgb, hex };
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        btn.click();
    }
})




