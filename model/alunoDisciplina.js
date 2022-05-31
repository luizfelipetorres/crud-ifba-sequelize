const Sequelize = require('../node_modules/sequelize')
const database = require('../db')

const AlunoDisciplina = database.define('alunoDisciplina', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = AlunoDisciplina