const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const conexao = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}) 

module.exports = conexao;