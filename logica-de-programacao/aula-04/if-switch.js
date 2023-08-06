// -> Condicionais IF/ELSE
// -> Condicionais SWITCH
// -> Dinâmica

// Pra que serve condicionais? 
// escolher caso, (caso tal coisa seja verdadeiro, faça isso: ) // IF
// opcionalmente dar outra opção caso não acontecer //ELSE
// Tomar decisão, eu utilizo condicionais

// -- IF/ELSE

const idade = 18
const temIngresso = false
// >= == > =
const ehMaiorIdade = (idade >= 18) ? 'é maior de idade' : 'é menor de idade'

// Por favor não faça isso...
const ternarioAninhado = (idade >= 18) ? 'Verdadeira' : (idade === 16) ? 'Opa 16' : 'Ih, não é =(';
console.log(ternarioAninhado) // Opa 16

if(idade >= 18){
    if(!temIngresso) {
        console.log('Não tem acesso a festa')
    }else {
        console.log('Tem acesso a festa')
    }
} else if(idade === 16){
    console.log('Opa 16')
} else if(idade === 10){
    console.log('Opa 10')
}else{
    console.log('Não tem acesso a festa.')
}
// Não tem acesso a festa

if(true){
    if(false){
        if(true){

        }
    }
} // Isso também não :\

// -- switch
switch (idade) {
    case 18:
        console.log('é 18')
        break;
    case 16:
        console.log('é 16');
        break;
    default:
        console.log('Idade inválida.');
}

const aluno = {
    nome: 'Mateus',
    turma: 1033,
    corte: 6,
    notas: [
        { materia: 'Lógica', nota: 8 },
        { materia: 'Redes', nota: 1 },
        { materia: 'Finanças', nota: 10 },
    ],
    calculaMedia: function() { // utilizar () => Cannot read properties of undefined
        const somaNotas = this.notas.reduce((acc, current) => {
            return acc + current.nota
        }, 0)

        // retornar a media, e se passou ou não baseado na nota de corte?
        const media = somaNotas / this.notas.length  
        if(media >= 6){
            return {
                media,
                status: true
            }
        }

        return {
            media,
            status: false
        }

        console.log('fiquei apagado?')
    } // pair programming
}

console.clear()
console.log(aluno.calculaMedia()) // status == true