const inputHTML = document.querySelector("#input-html")
const inputJS = document.querySelector("#input-js")
const btn = document.querySelector("#btn")
const form = document.querySelector("form")

form.addEventListener("submit", ()=>{
    var textHTML = inputHTML.value
    var textJS = inputJS.value
    inputJS.value = ''
    inputHTML.value = ''

    localStorage.setItem("texto-html", JSON.stringify({"content":textHTML}))
    localStorage.setItem("texto-javascript", JSON.stringify({"content": textJS}))
})
const chk = document.getElementById("chk")

chk.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

var data = new Date();
var horas = data.getHours();

if (horas < 18) {
    document.body.classList.toggle("white-mode");
}

