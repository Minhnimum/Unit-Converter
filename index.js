/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("input-el");
const convertBtn = document.getElementById("button-el");
let length = document.getElementById("length-el");
let volume = document.getElementById("volume-el"); 
let mass = document.getElementById("mass-el");
const resetBtn = document.getElementById("reset-el");
const rewindBtn = document.getElementById("rewind-el");
const themeBtn = document.getElementById("themebtn-el");
const body = document.body;


function convertUnits(inputValue) {
    length.innerHTML = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
    volume.innerHTML = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
    mass.innerHTML = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`;
}

convertBtn.addEventListener("click", function()  {
    let inputValue = input.value;
    if (inputValue === "") {
        return;
    }
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(inputValue);
    localStorage.setItem("history", JSON.stringify(history));
    convertUnits(inputValue);
})

resetBtn.addEventListener("click", function() {
    input.value = "";
    length.innerHTML = "";
    volume.innerHTML = "";
    mass.innerHTML = "";
    localStorage.clear();
})

rewindBtn.addEventListener("click", function() {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    if (history.length > 0) {
        history.pop();
        let lastValue = history[history.length - 1];
        input.value = lastValue;
        convertUnits(lastValue);
        localStorage.setItem("history", JSON.stringify(history));
    }
    else {
        alert("No history to rewind.");
    }
})

themeBtn.addEventListener("click", function() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "🌟";
    }
})
