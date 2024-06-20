const Model = require('../produto/produto-table')
const { Op } = require('sequelize');
const notFound = require('../../libs/produtoNotFoundError')

module.exports = {
    listar(){
        return Model.findAll();
    },

    inserir(produto){
        return Model.create(produto);
    },

    async findProdutct({ id, codigo_cor, codigo_voltagem, descricao }) {
        const query = {
            where: {
                [Op.or]: [
                    id ? { id: id } : null,
                    codigo_cor ? { codigo_cor } : null,
                    codigo_voltagem ? { codigo_voltagem } : null,
                    descricao ? { descricao: { [Op.like]: `%${descricao}%` } } : null
                ].filter(Boolean)
            }
        };

        const encontrado = await Model.findAll(query);
        return encontrado; 
    },


    async findId(id){

        const encontrado = await Model.findOne({
            where :{
                id: id.id
            }
        })

        return encontrado
    },

    atualizar(id, dadosAtualizar){
        return Model.update(dadosAtualizar, {
            where : {id : id}
    })
    },

    remover(id){
        return Model.destroy({
            where : {id : id}
        })
    }
}