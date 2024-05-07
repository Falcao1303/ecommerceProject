const express = require('express');
const app = express();
const route = require('./routes/routes')
const produto_route = require('./routes/produto-routes')
const database = require('./models/connection')
const bodyParser = require('body-parser');
const session = require('express-session');


app.use(bodyParser.json());


// Configuração do middleware de sessão
app.use(session({
    secret: process.env.SESSION_KEY, // Defina sua chave secreta aqui
    resave: false,
    saveUninitialized: true
}));

app.use('/api/', route)
app.use('/produto/',produto_route);


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