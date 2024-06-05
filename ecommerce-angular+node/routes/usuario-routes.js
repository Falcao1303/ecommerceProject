const route = require('express').Router()
const transactionsUsuarios = require('../models/usuario/transactions.js') 
const UsuariosController = require('../controllers/usuarios/usuarios-controller.js')



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
            const usuario = new UsuariosController(dados)
            await usuario.criar()
            res.status(201).json({ message: "Usuário criado com sucesso" });
        }catch(erro){
            next(erro)
        }
    })

    route.post('/login', async (req, res, next) => {
        const { login, senha } = req.body;
        try {
            const usuario = new UsuariosController({login: login,senha: senha})
            await usuario.login_account()
            req.session.usuarioId = usuario.login;
            res.json(usuario);
        } catch (error) {
            next(error)
            res.status(500);
        }
    });


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

