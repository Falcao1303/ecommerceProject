const express = require('express');
const app = express();
const route = require('./routes/routes')
const database = require('./models/connection')


// Iniciar o servidor


app.use('/api/', route)

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});