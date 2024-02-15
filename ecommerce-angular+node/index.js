const express = require('express');
const app = express();
const route = require('./routes/routes')
const database = require('./models/connection')
const bodyParser = require('body-parser');


app.use(bodyParser.json());


// Iniciar o servidor


app.use('/api/', route)


database.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
    app.listen(3000, () => {
      console.log('Servidor iniciado na porta 3000');
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });