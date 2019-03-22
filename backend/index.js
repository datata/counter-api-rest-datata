const express = require('express');
const app = express();
const fs = require('fs'); // modulo del core de node
const port = 3000;

// BODY PARSE TO JSON --  transforma body en JSON
app.use(express.json());

// enable CORS  setear cabeceras de respuesta para que el protocolo funcione correctamente


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next(); 
    // next(); para que pase de esta middleware y continue con los get post put ,.... o lo que haya
});


app.get('/value', (req, res) => {

    const jsonString = fs.readFileSync('./db.json', 'UTF-8');   //devuelve string
    const data = JSON.parse(jsonString);                        // devuelve object
    res.json(data);

})

app.get('/increment', (req, res) => {



})

app.get('/decrement', (req, res) => {

})




app.listen(port, () => console.log('Servidor levantado en ' + port));