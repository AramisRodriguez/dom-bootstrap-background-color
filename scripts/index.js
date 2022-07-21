let fondo = document.getElementById("background");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");


function colorChange() {
    fondo.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
}