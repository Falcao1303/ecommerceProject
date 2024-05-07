const route = require('express').Router()
const transactionsProdutos = require('../controllers/usuarios/transactions-controller.js') 
const produtosController = require('../controllers/usuarios/usuarios-controller')



    route.get('/getProduto/:idproduto/:descricao',async  (req,res) =>{
     const results = 'hello';
        res.status(200)
        res.send(results);    
    })

module.exports = route

