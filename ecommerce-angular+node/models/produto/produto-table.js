const Sequelize = require('sequelize');
const conexao = require ('../connection.js');


const Produtos = conexao.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo_cor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codigo_voltagem: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao_completa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ativo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Produtos;