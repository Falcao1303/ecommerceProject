const ProdutoTransactions = require ('../../models/produto/transactions')
const InvalidData = require ('../../libs/invalidData')


class Produtos {
    constructor({ id, codigo_cor, codigo_voltagem, descricao, descricao_completa, data_cadastro, ativo}) {
        this.id = id;
        this.codigo_cor = codigo_cor;
        this.codigo_voltagem = codigo_voltagem;
        this.descricao = descricao;
        this.descricao_completa = descricao_completa;
        this.data_cadastro = data_cadastro;
        this.ativo = ativo;
    }
  
    async criar() {
      this.validar();


      const results = await ProdutoTransactions.inserir({
        id: this.id,
        codigo_cor : this.codigo_cor,
        codigo_voltagem :this.codigo_voltagem,
        descricao: this.descricao,
        descricao_completa :this.descricao_completa,
        data_cadastro : this.data_cadastro,
        ativo : this.ativo,
      })
    }
  
    async carregar() {
        const produtoEncontrado = await ProdutoTransactions.findProdutct({ id: this.id, codigo_cor: this.codigo_cor, codigo_voltagem: this.codigo_voltagem, descricao: this.descricao })
      
        if (produtoEncontrado) {
            return produtoEncontrado.map(produto => ({
                id: produto.idproduto,
                codigo_cor: produto.codigo_cor,
                codigo_voltagem: produto.codigo_voltagem,
                descricao: produto.descricao,
                descricao_completa: produto.descricao_completa,
                data_cadastro: produto.data_cadastro,
                ativo: produto.ativo
            }));
        } else {
            throw new Error('Produto não encontrado');
        }
    }
  
    async atualizar() {
   
    }
  
    async login_account() {

    }

    remover() {

    }

    validar(){
      const campos = ['id', 'codigo_cor', 'codigo_voltagem','descricao','descricao_completa','data_cadastro','ativo']
      campos.forEach(campo=> {
          const valor = this[campo];
          if(valor === undefined || valor.length === 0){
              throw new InvalidData(campo);
          }
          });
    }
  }
  
  module.exports = Produtos;