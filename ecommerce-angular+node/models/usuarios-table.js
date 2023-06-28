const Sequelize = require('sequelize');
const conexao = require ('./connection.js');




const Usuarios = conexao.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: Sequelize.STRING,
    senha: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Usuarios;
 