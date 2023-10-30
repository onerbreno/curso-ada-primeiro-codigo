// Arrays:
// 2. Crie uma função chamada maiorNumero que recebe um array de números e
// retorna o maior número.

const numbers = [1, 2, 3, 4, 5];

const biggestNumber = (array) => {
  const biggest = array.reduce((acc, curr) => {
    return acc > curr ? acc : curr
  })
}

console.log(biggestNumber(numbers))