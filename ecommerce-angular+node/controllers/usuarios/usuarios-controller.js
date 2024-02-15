const UsuarioTransactions = require ('../usuarios/transactions-controller')
const InvalidData = require ('../../libs/invalidData')


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
  
    async criar() {
      this.validar();
      const results = await UsuarioTransactions.inserir({
        nome : this.nome,
        cpf  : this.cpf,
        telefone :this.telefone,
        data_nascimento :this.data_nascimento,
        login : this.login,
        senha : this.senha,
      })
      this.id = results.id
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

    validar(){
      const campos = ['nome', 'cpf', 'telefone','data_nascimento','login','senha']
      campos.forEach(campo=> {
          const valor = this[campo];
          if(valor === undefined || valor.length < 3){
              throw new InvalidData(campo);
          }
          });
  }
  }
  
  module.exports = Usuarios;