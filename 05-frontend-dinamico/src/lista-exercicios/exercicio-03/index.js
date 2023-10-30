// Arrays:
// 3. Crie uma função chamada mediaArray que recebe um array de números e retorna a
// média dos valores.

const numbers = [1, 2, 3, 4, 5];

const averageArray = (array) => {
  const sum = array.reduce((acc, curr) => {
    return acc + curr
  })

  return sum / array.length
}
