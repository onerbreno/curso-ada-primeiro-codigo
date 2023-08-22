// HOISTING - içar
// var a; // apenas a declaração

try {
    console.log(a) // undefined
    var a = 'Algum texto' 
    console.log(a) // Algum texto

    console.clear();
    var b
    console.log(b) // undefined
    b = 'Outro texto'
    console.log(b) // Outro texto

    console.log(c) // ReferenceError: c is not defined
} catch (error) {
    // console.error(error)
}

// console.log(d) // Cannot access 'd' before initialization
// const d = 'Mais um texto'
// console.log(d)

console.clear()
// console.log(e) 
// let e = 'Mais um mais um..'
// console.log(e)


// let a = 7
// somar(1, 2); // Erro
const somar = (a, b) => { // let... 
    console.log(a)
    console.log(a + b)
}
// somar(1, 2); // 3

// multiplicar(10, 2) // Reference Error
const multiplicar = function(a, b) {
    console.log(a*b)
}
// multiplicar(10, 2) // 20

// subtrair(5, 3) // 4
function subtrair(a, b) {
    const fixo = 2
    console.log(a - b + fixo)
}
// subtrair(5, 3) // 4


// console.log(meuMap) // Cannot access 'meuMap' before initialization
// const meuMap = [].map()

// console.log(meuMap) // Undefined
// var meuMap = [].map()

[1,2,3].map(valor => valor)