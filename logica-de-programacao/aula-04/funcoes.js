// -> Declarações de funções
// -> Reescrevendo funções
// -> Parametrização

// O que é uma função? 
// semelhante há uma variável, armazena uma instrução
// conjunto de código reutilizável

function fazAlgo(){
  console.log('Faz algo...')
}

fazAlgo();

const nome = 'Mateus';
// typescript 
const somar = function(valor1, valor2){
  return valor1+valor2
}

let resultado = somar(3, 2);
console.log(resultado); // 5

resultado = resultado+1 
console.log(resultado); // 6

const numeros = [1, 2, 3, 4]

const mostraValor = (valor) => {
  return valor * 2 + 3;
}


const resultadoCalculo = numeros.map(mostraValor) // point-free
console.log(resultadoCalculo) // [5, 7, 9, 11]

const multiplicarPor2 = (numero) => numero * 2
const adiciona3 = (numero) => numero + 3;

// composição de point-free
const resultadoComposto = numeros.map(multiplicarPor2).map(adiciona3)

console.clear();
console.log(resultadoComposto) // [5, 7, 9, 11]

const aluno = {
  nome: 'Mateus',
  turma: 1033,
  notas: [
      { materia: 'Lógica', nota: 8 },
      { materia: 'Redes', nota: 1 },
      { materia: 'Finanças', nota: 10 },
  ],
  calculaMedia: function() { // utilizar () => Cannot read properties of undefined
      const somaNotas = this.notas.reduce((acc, current) => {
          return acc + current.nota
      }, 0)

      const media = somaNotas / this.notas.length  
      
      return media
  } // pair programming
}

console.log(aluno.nome) // Mateus
console.log(aluno.calculaMedia()) 