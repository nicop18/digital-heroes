// requerimos todo lo q vamos a suar

// requerimos express
let express = require('express');
// instanciar express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path')

app.get("/", function(req, res){
    path.resolve()// resuelve la ruta completa de este archivo


    res.send('Hola como estas?')
})


app.listen(3000)