const body = document.querySelector("body")

var contentHTML = JSON.parse(localStorage.getItem("texto-html")).content
var contentJS = JSON.parse(localStorage.getItem("texto-javascript")).content
console.log(contentHTML)
console.log(contentJS)
var divHtml = document.createElement("div")
divHtml.innerHTML = contentHTML
var tagScript = document.createElement("script")
var texto = document.createTextNode(contentJS)
tagScript.appendChild(texto)
// tagScript.innerHTML = contentJS
console.log(tagScript)
body.appendChild(divHtml)
body.appendChild(tagScript)
// localStorage.clear()

/* <h1>oiieee</h1>
<button id="btn">Entrar</button>

var btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    console.log(1) 
}) */