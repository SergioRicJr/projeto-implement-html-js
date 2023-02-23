const fs = require('fs')

fs.writeFile("./novo.js",   
    "var i = 3 \nconsole.log(i)", function(err){
        if (err){
            console.log("erro")
        }
        console.log("certo")
    }
)