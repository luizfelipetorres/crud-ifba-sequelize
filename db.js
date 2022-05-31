//Importa o sequelize 
const Sequelize = require("sequelize")

//Cria a conexão com o BD
const sequelize = new Sequelize('ifba', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

//Exporta
module.exports = sequelize