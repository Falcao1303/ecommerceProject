const ProdutoTransactions = require ('../../models/produto/tables/transactions')
const InvalidData = require ('../../libs/invalidData')
const notFound = require('../../libs/produtoNotFoundError')


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
      const codexistente = await ProdutoTransactions.findId({ id: this.id })

        if (codexistente) {
            throw new Error('Produto já cadastrado');
        }

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
                id: produto.id,
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
        const codexistente = await ProdutoTransactions.findId({ id: this.id })
        const campos = ['id', 'codigo_cor', 'codigo_voltagem', 'descricao', 'descricao_completa', 'data_cadastro', 'ativo']
        const dadosAtualizar = {}
  
        campos.forEach((campo) => {
            const valor = this[campo]
            if(valor !== undefined){
                dadosAtualizar[campo] = valor
            }
        })
  
        if(Object.keys(dadosAtualizar).length === 0){
         throw new notFound();
        }
        await ProdutoTransactions.atualizar(this.id, dadosAtualizar)
    }

    remover() {
        return ProdutoTransactions.remover(this.id)
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