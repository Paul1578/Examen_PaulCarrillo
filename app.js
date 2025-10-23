const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hola mundo desde node.Js este es un app para el examen de DevOps!');
});


app.get('/data', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error leyendo el archivo');
    }
    res.json(JSON.parse(data)); 
  });
});


app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

module.exports = app;
