const route = require('express').Router()
const transactionsProdutos = require('../controllers/usuarios/transactions-controller.js') 
const produtosController = require('../controllers/usuarios/usuarios-controller')



    route.get('/getProduto/:idproduto/:descricao',async  (req,res) =>{
     const results = 'hello';
        res.status(200)
        res.send(results);    
    })

    route.post('/saveProduto/',async(req,res)=>{
        const dados = req.body;

    })

module.exports = route

