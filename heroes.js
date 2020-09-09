// requerimos todo lo q vamos a suar

// requerimos express
let express = require('express');
// instanciar express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path');
const { json } = require('express');


app.get("/", function(req, res){
    path.resolve()// resuelve la ruta completa de este archivo


    res.send(' ​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer enti!')
})

app.get("/heroes", function(req, res){
    
    
    

    res.sendfile("heroes.json")
})

app.listen(3000)