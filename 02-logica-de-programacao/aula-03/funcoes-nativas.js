
// -- console

console.log('Algo escrito anteriormente...');

console.clear() // limpa o console
console.log('Mateus')

console.error('Erro ao abrir')
console.warn('Seria interessante ver isso...')
console.info('Apenas informativo.')

const aluno = {
    nome: 'Matheus',
    idade: 19,
    turma: 1033
}

console.clear();
// console.table(aluno)

// -- strings

const frutas = 'Banana'
const caqui = 'caqui'

console.log(`${frutas} ${caqui} `)
console.log(frutas + ' ' + caqui)

const alunos = 'Matheus,Breno,Sofia,Marcos'
console.log(alunos.toLowerCase().split(',')) // ['matheus', 'breno', 'sofia', 'marcos']

