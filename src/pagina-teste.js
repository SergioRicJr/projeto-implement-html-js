const body = document.querySelector("body")
const main = document.querySelector("main")

var contentHTML = JSON.parse(localStorage.getItem("texto-html")).content
var contentJS = JSON.parse(localStorage.getItem("texto-javascript")).content
var divHtml = document.createElement("div")
divHtml.innerHTML = contentHTML
var tagScript = document.createElement("script")
var texto = document.createTextNode(contentJS)
tagScript.appendChild(texto)
console.log(tagScript)
main.appendChild(divHtml)
body.appendChild(tagScript)

/* <h1>oiieee</h1>
<button id="btn">Entrar</button>

var btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    console.log(1) 
}) */