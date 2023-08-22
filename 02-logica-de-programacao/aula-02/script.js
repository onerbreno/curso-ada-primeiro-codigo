
// --operadores de coerção

// console.log(a === b) // false


// var nome = 'Mateus'

// var idade = 26

// var idadeMultiplicada = idade-10
// console.log(idadeMultiplicada)

// var nome = 'Mateus', idade = 26

// var sobrenome = nome = 'Paixão'
// var nome;

// console.log(nome) // Mateus
// console.log(idade) // 26
// console.log(sobrenome) // Paixão

// var a = b, c = 6

// var b;
// var a = b, c = 6;

// console.log(typeof c) // 6
// console.log(typeof nome)

// console.log(typeof true) // boolean
// console.log(typeof false) // boolean

// Operador de atribuição
// Operador Aritméticos

// +, -, /, *...

// operadores lógicos aritméticos

// >, <, >=, <=, ==, ===, !=, !===

// var a = '10';
// var b = 10;

// console.log(a > b) // false
// console.log(a < b) // true
// console.log(a >= b) // false
// console.log(a <= b) // true

// console.log(a === b) // true
// console.log(a != b) // false

// var a = '10';
// var b = 10;

// console.log(a === b) // true
// console.log(a != b) // false

// Operadores de coerção

// +, -

// console.log(typeof b) // number 
// console.log(-b) // -10 
// console.log(+a) // 10 

// var True = true // 1
// var False = false // 0 

// console.log(!!1) // true
// console.log(!!0) // false

// console.log(+True) // 1
// console.log(+False) // 0
// console.log(-True) // -1
// console.log(-False) // 0

// var a = '10'
// var b = parseInt(a)
// var c = '10.98'
// var d = parseFloat(c)

// console.log(a, b) // '10' 10

// console.log(typeof d) // number
// console.log(typeof b) // number

// console.log(Number(a)) // 10
// console.log(Number(c)) // 10.98

// OPeradores lógicos

// &&, ||, !

// var e = true
// var f = false

// console.log(e && f) // false
// console.log(e || f) // true
// console.log(!e) // false
// console.log(!f) // true


// operador lógico de decisão -> operador ternário

// Estamos em uma festa, onde só é permitido
// Maiores de 16 anos

// condição ? verdadeiro : falso

// var ehMaiorDe16 = false
// var temIngresso = true

// var podeEntrar = (ehMaiorDe16 && temIngresso) ? 'Pode entrar =D' : 'Não pode entrar =D'

// console.log(podeEntrar) // 'Não pode entrar =D' 
// console.log(podeEntrar) // Pode entrar 
// console.log(podeEntrar) // Pode entrar 
// console.log(podeEntrar) // Não pode entrar 


// Valores falsy
// falsy
// 0, "", null, undefined, NaN, false

// console.log(!!0)
// console.log(!!null)
// console.log(!!undefined)
// console.log(!!NaN)
// console.log(!!false)
// console.log(!!"")

// operador de coalescência
// ??

// console.log(0 || 'teste') // true
// console.log(0 ?? 'teste') // 

// var a = undefined || 'teste1'
// var b = "" || 'teste2'
// var c = NaN || 'teste3'
// var d = 0 || 'teste4'

// console.log(a) // teste1 
// console.log(a) // teste2
// console.log(a) // teste2
// console.log(b) // undefined
// console.log(c) // undefined
// console.log(d) // undefined


// Array

// var numeros = [1, 2, 3, 4]
// var frutas = ['banana', 'limão', 'melancia']
// var nome = 'Mateus' 

// console.log(numeros) // 4
// console.log(frutas[2]) // melancia 
// console.log(nome) // Mateus
// frutas[2] = 'caqui'
// console.log(frutas) // caqui
// frutas.push('caqui')
// frutas.pop();
// frutas.unshift('caqui');
// console.log(frutas)

// desestruturação

// var frutaNova = 'morango'
// frutas.push(frutaNova)

// var banana = frutas[0]
// var limao = frutas[1]

// var [melancia] = frutas
// var frutasNovas = [...frutas]

// console.log(frutas[0]) // banana
// console.log(frutas[1]) // limão
// console.log(banana, limao)
// console.log(primeiraFruta, segundaFruta)
// console.log(fruta) // limão
// console.log(frutasNovas)