
const array1 = [1,2,3,4] // array1[0] -> 1
const array2 = [
    [1,2,3,4],
    [4,5,5,6],
    [6,7,8,9],
    [10, [11, 12]]
]

// console.log(array2[0]) // [1,2,3,4],
// console.log(array2[0][0]) // 1
// console.log(array2[1][3]) // 6

// console.log(array2[3][1][0])

// Desenvolver lista de contatos, cada contato deve possuir
// nome, sobrenome, numero
// ordenação

const contatos = [
    { nome: 'Marcos', sobrenome: 'Lins', numero: 123456789 },
    { nome: 'Marcos2', sobrenome: 'Lins2', numero: 123456780 },
    { nome: 'Marcos3', sobrenome: 'Lins3', numero: 123456781 },
    { nome: 'Marcos4', sobrenome: 'Lins4', numero: 123456782 },
]

contatos[4] = { nome: 'Marcos5', sobrenome: 'Lins5', numero: 123456782 },
contatos.push({ nome: 'Marcos6', sobrenome: 'Lins6', numero: 123456782 })

// funções/métodos de array
// forEach *
// map *
// filter *
// reduce *
// concat

// -- FOR EACH  
// contatos.forEach((item, index) => {
//     const { nome, ...novoItem } = item
//     console.log(novoItem)
//     console.log(`${index}: ${nome} ${sobrenome}`)
//     // console.log(valor)
// })

// -- MAP
const contatosEditados = contatos.map((item, index) => {
    // console.log(index)
    return item.nome === 'Marcos3' ? {
        ...item,
        numero: 123
    } : item
})

// -- FILTER
const contatosFiltrados = contatos.filter((item, index) => {
    const { sobrenome } = item 
    return sobrenome === 'Lins' || sobrenome === 'Lins2' // true / false
})

// console.log(contatosFiltrados)
// -- REDUCE

// const numeros = [1,2,3] // 6

// console.clear()
// const numero = numeros.reduce((acc, current) => {
//     // console.log(current)
//     return acc = acc + current
// }, 0)

// console.log(numero) // 3

// Remover duplicidades 
const numeros = [1,2,3,1,5,5,6] // [1,2,3,5,6]

// const numerosSerializado = numeros.reduce((acc, current) => {
//     return acc.includes(current) ? acc : [...acc, current]
// }, [])

console.clear()
// -- CONCACT
// const numerosExtras = [7,8,9,10]
// const novoArray = numeros.concat(numerosExtras, numerosExtras)

// const novoCSpread = [...numeros, ...numerosExtras, ...numerosExtras]

// console.log({novoArray, novoCSpread})

// console.log(numeros.push(10))

// console.log(numeros.includes(1)) // true
// console.log(numeros.includes(6)) // true
// console.log(numeros.includes(10)) // false
// console.log(numeros.includes(4)) // false


// -- FLAT

// const multiArray = [numeros, numeros]

// console.log(multiArray.flat())