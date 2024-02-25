const Model = require('../../models/usuarios-table')
const notFound = require('../../libs/clienteNotFoundError')

module.exports = {
    listar(){
        return Model.findAll();
    },

    inserir(usuario){
        return Model.create(usuario);
    },

    async findUser(email,login) {
        const encontrado = await Model.findOne({ $or: 
                                                [{ login },
                                                { email }] });
         console.log("encontrado",encontrado);                                       
        return encontrado

    },

    async findId(id){
        const encontrado = await Model.findOne({
            where :{
                id: id 
            }
        })

        if (!encontrado){
            throw new notFound();
        }

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