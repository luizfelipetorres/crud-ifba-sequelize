(async () =>{

    //Importando conexão com banco de dados
    const database = require('./db')

    //Importanto objetos
    const Aluno = require('./model/aluno')
    const Disciplina = require('./model/disciplina')

    //Aguardando sincronização com banco de dados 
    await database.sync( { force: true })

    const alunos = [
        {
            nome: 'Luiz Felipe',
            idade: 24
        },
        {
            nome: 'Diego Santos',
            idade: 18
        },
        {
            nome: 'Luis Fernando',
            idade: 25
        }
    ]

    const disciplinas = [
        {
            codDisciplina: 'INF029',
            nomeDisciplina: 'LABORATÓRIO DE PROGRAMAÇÃO',
            professor: 'Renato Novais'
        },
        {
            codDisciplina: 'INF006',
            nomeDisciplina: 'ESTRUTURA DE DADOS E ALGORITMOS',
            professor: 'Allan Edgar'
        },
        {
            codDisciplina: 'INF028',
            nomeDisciplina: 'ARQUITETURA DE COMPUTADORES E SOFTWARE BÁSICO',
            professor: 'Flávia Maristela'
        },
        {
            codDisciplina: 'INF031',
            nomeDisciplina: 'METODOLOGIA DE PESQUISA',
            professor: 'Simone Amorim'
        }
    ]

    //Cadastrar alunos e disciplinas de um array (CREATE)
    try {
        alunos.forEach(async element => {
            await Aluno.create({
                nome: element.nome,
                idade: element.idade
            })
        })
    
        disciplinas.forEach(async element => {
            await Disciplina.create({
                codDisciplina: element.codDisciplina,
                nomeDisciplina: element.nomeDisciplina,
                nomeProfessor: element.professor
            })
        })
    } catch (error) {
        console.log(`erro: ${error}`)
    }

    console.log(await Aluno.findAll())
    console.log(await Disciplina.findAll())


    //Buscar uma disciplina pela chave primária (READ)
    const inf029 = await Disciplina.findOne({
        where: {
            codDisciplina: 'INF029'
        }
    })
    console.log(inf029)

    //Buscar um aluno com filtro (READ)
    const luiz = await Aluno.findOne({
        where:{
            nome:'Luiz Felipe'
        }
    })
    console.log(luiz)

    //UPDATE
    luiz.idade = 25 
    await luiz.save()

    //Criar vínculo N-M
    await luiz.addDisciplina([inf029])

    //DELETE
    Disciplina.destroy({
        where: {
            codDisciplina: 'INF031'
        }
    })

})()