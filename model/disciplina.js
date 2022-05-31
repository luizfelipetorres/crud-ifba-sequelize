const Sequelize = require('../node_modules/sequelize')
const database = require('../db')
const AlunoDisciplina = require('./alunoDisciplina')
const Aluno = require('./aluno')

const Disciplina = database.define('disciplina', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    codDisciplina: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeDisciplina:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeProfessor: Sequelize.STRING
})

//Criar chave estrangeira


module.exports = Disciplina