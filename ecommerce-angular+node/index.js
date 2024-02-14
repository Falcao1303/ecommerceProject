const express = require('express');
const app = express();
const route = require('./routes/routes')
const database = require('./models/connection')


// Iniciar o servidor


app.use('/api/', route)
app.use(express.json());


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