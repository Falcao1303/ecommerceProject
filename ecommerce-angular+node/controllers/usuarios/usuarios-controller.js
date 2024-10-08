const UsuarioTransactions = require ('../../models/usuario/transactions')
const InvalidData = require ('../../libs/invalidData')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Usuarios {
    constructor({ id, nome, cpf, telefone, email, data_nascimento, login, senha }) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.email = email;
      this.data_nascimento = data_nascimento;
      this.login = login;
      this.senha = senha;
    }
  
    async criar() {
      this.validar();

      let usuarioExistente = await UsuarioTransactions.findUser(this.email,this.login)
      if (usuarioExistente) {
        if (usuarioExistente.email === this.email) {
            throw new Error('Já existe um usuário cadastrado com esse e-mail!')
        } else if (usuarioExistente.login === this.login) {
            throw new Error('Login indisponível para cadastro!')
        }
      }

      const hashedSenha = await bcrypt.hash(this.senha, 10);

      const results = await UsuarioTransactions.inserir({
        nome : this.nome,
        cpf  : this.cpf,
        telefone :this.telefone,
        email: this.email,
        data_nascimento :this.data_nascimento,
        login : this.login,
        senha : hashedSenha,
      })
      this.id = results.id
    }
  
    async carregar() {
      const usuarioEncontrado = await UsuarioTransactions.findId(this.id)
      
      this.id = usuarioEncontrado.id
      this.nome = usuarioEncontrado.nome
      this.cpf = usuarioEncontrado.cpf
      this.telefone = usuarioEncontrado.telefone
      this.email = usuarioEncontrado.email
      this.data_nascimento = usuarioEncontrado.data_nascimento
      this.login = usuarioEncontrado.login
      this.senha = usuarioEncontrado.senha
    }
  
    async atualizar() {
      await UsuarioTransactions.findId(this.id)
      const campos = ['nome', 'cpf', 'telefone','data_nascimento','login','senha']
      const dadosAtualizar = {}

      campos.forEach((campo) => {
          const valor = this[campo]
          if(valor !== undefined){
              dadosAtualizar[campo] = valor
          }
      })

      if(Object.keys(dadosAtualizar).length === 0){
       throw new DataNotFound();
      }
      await UsuarioTransactions.atualizar(this.id, dadosAtualizar)
    }
  
    async login_account(res, next) {
      try {
        let usuarioCadastrado = await UsuarioTransactions.findUserLogin(this.login);
  
        if (!usuarioCadastrado) {
          return res.status(401).json({ message: 'Login incorreto' });
        }
  
        // Verificar se a senha está correta
        const senhaCorreta = await bcrypt.compare(this.senha, usuarioCadastrado.senha);
  
        if (!senhaCorreta) {
          return res.status(401).json({ message: 'Senha incorreta' });
        }
  
        // Gerar token JWT
        const token = jwt.sign({ id: usuarioCadastrado.id, email: usuarioCadastrado.email }, process.env.SESSION_KEY, { expiresIn: '1h' });
  
        this.token = token;
  
        // Retorna uma resposta de sucesso com o token gerado
        return res.status(200).json({ message: 'Login bem-sucedido', token: this.token });
  
      } catch (error) {
        // Passa o erro para o middleware de erro
        return next(error);
      }
    }

    remover() {
      return UsuarioTransactions.remover(this.id)
    }

    validar(){
      const campos = ['nome', 'cpf', 'telefone','email','data_nascimento','login','senha']
      campos.forEach(campo=> {
          const valor = this[campo];
          if(valor === undefined || valor.length < 3){
              throw new InvalidData(campo);
          }
          });
    }
  }
  
  module.exports = Usuarios;