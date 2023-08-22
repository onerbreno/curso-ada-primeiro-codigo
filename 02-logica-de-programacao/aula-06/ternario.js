// TERNÁRIO

const idade = 19;
// const ehMaiorDeIdade = idade >= 18 ? true : false
const ehMaiorDeIdade = idade >= 18
console.log(ehMaiorDeIdade) // false

const apenasLeitura = false
const titulo = apenasLeitura ? 'Visualizar' : 'Editar';
console.log(titulo) // Editar

// const tituloSecundario = if(apenasLeitura) {'Visualizar'} else { 'Editar'}
// console.log(tituloSecundario) // Unexpected token 'if'

let tituloSecundario = ''

if(apenasLeitura){
    tituloSecundario = 'Visualizar'
}else{
    tituloSecundario = 'Editar'
}

console.log(tituloSecundario) // Editar