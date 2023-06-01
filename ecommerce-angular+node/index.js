const express = require('express');
const app = express();
const route = require('./routes/routes')


// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});