const Sequelize = require('../node_modules/sequelize')
const database = require('../db')
const AlunoDisciplina = require('./alunoDisciplina')
const Disciplina = require('./disciplina')

const Aluno = database.define('aluno', {
    matricula: {  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: Sequelize.INTEGER

})

//Relacionamento N-M 
Aluno.belongsToMany(Disciplina, {
    through: {
        model: AlunoDisciplina,
    },
    foreignKey: 'idAluno',
    constraint: true
})

//Relacionamento N-M 
Disciplina.belongsToMany(Aluno, {
    through: {
        model: AlunoDisciplina,
    },
    foreignKey: 'idDisciplina',
    constraint: true
})

//Super Many-To-Many
Aluno.hasMany(Disciplina, {foreignKey:'idAluno'})
AlunoDisciplina.belongsTo(Disciplina, {foreignKey: 'idAluno'})
Disciplina.hasMany(Aluno, {foreignKey: 'idDisciplina'})
AlunoDisciplina.belongsTo(Disciplina, {foreignKey: 'idDisciplina'})

module.exports = Aluno