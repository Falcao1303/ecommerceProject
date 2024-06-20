const route = require('express').Router()
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
        try{
            const id = req.params.idproduto
            const produto = new produtosController({id: id})
            await produto.carregar()
            await produto.remover()
            res.status(204)
            res.end()
        }catch(erro){
            next(erro)
        }
    })
    


module.exports = route

