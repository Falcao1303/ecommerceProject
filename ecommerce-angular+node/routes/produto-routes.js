const route = require('express').Router()
const transactionsProdutos = require('../models/usuario/transactions.js') 
const produtosController = require('../controllers/usuarios/usuarios-controller')



    route.get('/getProduto/:idproduto/:descricao',async  (req,res) =>{
     const results = 'hello';
        res.status(200)
        res.send(results);    
    })

    route.post('/saveProduto/',async(req,res)=>{
        const dados = req.body;
    })

    route.put('/updateProduto/:idproduto',async(req,res)=>{
        const dados = req.body;
    })

    route.delete('/deleteProduto/:idproduto',async(req,res)=>{
        const dados = req.body;
    })
    


module.exports = route

