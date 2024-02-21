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
            const usuarioBusca = new UsuariosController ({ id: id }); 
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


    route.put('/usuarios/:idUsuario',async(req,res,next)=>{
        try{
            const id = req.params.idUsuario
            const dadosRecebidos = req.body
            const dados = Object.assign({},dadosRecebidos,{id : id})
            const usuario = new UsuariosController(dados)
            await usuario.atualizar()
            res.status(204)
            res.end()
        }catch(erro){
            next(erro)
        }
    })

    route.delete('/usuarios/:idUsuario',async(req,res,next)=>{
        try{
            const id = req.params.idUsuario
            const usuario = new UsuariosController({ id : id})
            await usuario.carregar()
            await usuario.remover()
            res.status(204)
            res.end()
        }catch(erro){
            next(erro)
        }
    })

module.exports = route

