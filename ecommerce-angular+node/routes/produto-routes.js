const route = require('express').Router()
const transactionsProdutos = require('../models/usuario/transactions.js') 
const produtosController = require('../controllers/produtos/produtos-controller')



    route.get('/getProduto',async  (req,res) =>{
        const { id, codigo_cor, codigo_voltagem, descricao } = req.query;
        const produtoController = new produtosController({ id, codigo_cor, codigo_voltagem, descricao });
        const produtos = await produtoController.carregar();
        res.status(200).json(produtos);
    })

    route.post('/saveProduto/',async(req, res, next)=>{
        try{
            const dados = req.body
            console.log("dados",dados);
            const produto = new produtosController(dados)
            await produto.criar()
            res.status(201).json({ message: "Produto criado com sucesso" });
        }catch(erro){
            next(erro)
        }
    })

    route.put('/updateProduto/:idproduto',async(req,res)=>{
        const dados = req.body;
    })

    route.delete('/deleteProduto/:idproduto',async(req,res)=>{
        const dados = req.body;
    })
    


module.exports = route

