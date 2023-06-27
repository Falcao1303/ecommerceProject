const Sequelize = require('sequelize');
const conexao = require ('./connections');



const  usuarios = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull : false
    },
    email: Sequelize.STRING,
    senha: Sequelize.STRING
}

module.exports = conexao.define('produto',usuarios);
 