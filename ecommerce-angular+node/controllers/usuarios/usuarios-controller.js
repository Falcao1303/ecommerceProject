const UsuarioTransactions = require ('../usuarios/transactions-controller.js')


class Usuarios {
    constructor({ id, nome, cpf, telefone, data_nascimento, login, senha }) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.data_nascimento = data_nascimento;
      this.login = login;
      this.senha = senha;
    }
  
    static validar(usuario) {
    }
  
    async criar() {

    }
  
    async carregar() {
      const usuarioEncontrado = await UsuarioTransactions.findId(this.id)
      
      this.id = usuarioEncontrado.id
      this.nome = usuarioEncontrado.nome
      this.cpf = usuarioEncontrado.cpf
      this.telefone = usuarioEncontrado.telefone
      this.data_nascimento = usuarioEncontrado.data_nascimento
      this.login = usuarioEncontrado.login
      this.senha = usuarioEncontrado.senha
    }
  
    async atualizar() {
      // Operação assíncrona de atualização de usuário
    }
  
    remover() {
      // Remoção do usuário
    }
  }
  
  module.exports = Usuarios;