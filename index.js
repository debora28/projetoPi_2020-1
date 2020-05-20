//Associar dependências instaladas
const express = require('express');
const bodyParser = require('body-parser');

// inicializar app express
const app = express();

let porta = 8000;
app.listen(porta, () => {
    console.log('Servidor em execução no porta ' + porta);
});
