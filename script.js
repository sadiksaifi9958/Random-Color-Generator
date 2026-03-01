let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let heading = document.querySelector("h1");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;
    let box = document.querySelector("div");
    box.style.background = randomColor;
});

function getRandomColor() {
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);


let color = `rgb(${red}, ${green}, ${blue} )`;
return color; 
}   