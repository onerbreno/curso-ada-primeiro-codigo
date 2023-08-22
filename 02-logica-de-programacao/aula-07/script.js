// Cadastrar turma contendo

// código, number entre 1 e 10 (no máximo 10 turmas)
// máximo, number máximo de alunos de 5 a 10

// Relacionamento 
// Entidades: Turma e Aluno

const turma = {
    codigo: 0,
    maximoDeAlunos: 0 
}

const turmas = []

// Cadastro de turmas
// Turma com o código já existente
const cadastrarTurma = ({codigo, maximoDeAlunos}) => {

    // const turmaEncontrada = turmas.filter(turma => turma.codigo === codigo).length
    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo)

    codigo = parseInt(codigo)
    maximoDeAlunos = parseInt(maximoDeAlunos)

    if(!codigo || !maximoDeAlunos){
        throw new Error('Erro de sintaxe')
    }

    if(codigo < 1 || codigo > 10 && maximoDeAlunos < 5 || maximoDeAlunos > 10){
        throw new Error('O codigo ou o maximo de alunos esta fora do escopo planejado')
    }

    if(!turmaEncontrada){
        turmas.push({ codigo, maximoDeAlunos})
    }

    return turmas
}

// console.log(turma)
console.log('SAÍDA', turmas)