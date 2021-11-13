const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res) {
    res.send("minha primeira requisição");
})

app.get("/segunda-req", function(req, res) {
    res.send("minha segunda requisição");
})

app.get("com parametros", function(req, res) {
    res.send("com parametros funciona")
});

app.listen(port, function(){
    console.log("ouvindo a porta 8080" , port);
})


//git add ./git commit -m " hjh"/git push

//insomnia 