const route = require('express').Router()
const transactionsUsuarios = require('../controllers/usuarios/transactions-controller.js') 
const UsuariosController = require('../controllers/usuarios/usuarios-controller')


    route.get('/usuarios/',async  (req,res) =>{
     const results = await transactionsUsuarios.listar();
        res.status(200)
        res.send(results);    
    })

    route.get('/usuarios/:idUsuario',async(req,res,next)=>{
        try{
            const id = req.params.idUsuario;
            const usuarioBusca = new UsuariosController ({ id: id }); // Corrigindo o nome da classe para maiúscula
            await usuarioBusca.carregar();
            res.status(200).json(usuarioBusca);
        }catch(erro){
            next(erro)
        }
        
    })

    
    route.post('/usuarios/createUser',async(req,res,next)=>{
        try{
            const dados = req.body
            await transactionsUsuarios.inserir(dados)
            res.status(201).json({ message: "Usuário criado com sucesso" });
        }catch(erro){
            next(erro)
        }

    })

    route.get('/produto/:idProduto',async(req,res,next)=>{
        try{
            const id = req.params.idProduto
            const produto = new Produto({ id : id})
            await produto.carregar()
            res.status(200)
            const serializeProduct = new ProductSerialize(
                res.getHeader('Content-Type')
            )
            res.send(
                serializeProduct.serialize(produto) 
            )
        }catch(erro){
            next(erro)
        }
    })

    route.put('/produto/:idProduto',async(req,res,next)=>{
        try{
            const id = req.params.idProduto
            const dadosRecebidos = req.body
            const dados = Object.assign({},dadosRecebidos,{id : id})
            const produto = new Produto(dados)
            await produto.atualizar()
            res.status(204)
            res.end()
        }catch(erro){
            next(erro)
        }
    })

    route.delete('/produto/:idProduto',async(req,res,next)=>{
        try{
            const id = req.params.idProduto
            const produto = new Produto({ id : id})
            await produto.carregar()
            await produto.remover()
            res.status(204)
            res.end()
        }catch(erro){
            next(erro)
        }
    })

module.exports = route

