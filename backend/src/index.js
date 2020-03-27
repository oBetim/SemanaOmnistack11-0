
const express = require('express'); // Esta linha de comando faz a importação do Express
const routes = require('./routes');
const cors = require('cors')

const app = express(); // Esta variável contém uma aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // Esta linha de código faz a variável ouvir a porta 3333