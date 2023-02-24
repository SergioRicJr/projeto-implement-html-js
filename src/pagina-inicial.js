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
var data = new Date();
var horas = data.getHours();

window.addEventListener("load",function(){
    if(horas<18)
    html.classList.toggle("white-mode");
    body.classList.toggle("white-mode");
})