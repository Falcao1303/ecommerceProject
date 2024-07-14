const express = require('express');
const app = express();
const usuarios_route = require('./routes/usuario-routes')
const produto_route = require('./routes/produto-routes')
const database = require('./models/connection')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');



app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:4200', // Substitua pelo endereço do seu front-end
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));



// Configuração do middleware de sessão
app.use(session({
    secret: process.env.SESSION_KEY, // Defina sua chave secreta aqui
    resave: false,
    saveUninitialized: true
}));

app.use('/api/', usuarios_route)
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