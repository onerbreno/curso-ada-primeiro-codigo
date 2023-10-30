// Arrays:
// 1. Crie uma função chamada somaArray que recebe um array de números e retorna a soma de todos os elementos

const numbers = [1, 2, 3, 4, 5];

const sumArray = (array) => {
  const sum = array.reduce((acc, curr) => {
    return acc + curr
  })

  return sum
}

console.log(sumArray(numbers))