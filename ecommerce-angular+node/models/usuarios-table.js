const Sequelize = require('sequelize');
const conexao = require ('./connection.js');



const  Usuarios = {
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

module.exports = conexao.define('usuarios',Usuarios);
 