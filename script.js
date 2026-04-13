let btn = document.querySelector("button");
let colorValue = document.querySelector(".color-value");


btn.addEventListener("click", function () {
    let heading = document.querySelector("h1");
    let randomColor = getRandomColor();
    colorValue.innerText = randomColor;
    let box = document.querySelector("div");
    box.style.background = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);


    let color = `rgb(${red}, ${green}, ${blue} )`;
    return color;
}   