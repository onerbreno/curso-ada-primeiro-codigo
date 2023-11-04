// 6. Crie uma função chamada encontrarPropriedade que recebe um objeto e uma
// chave e retorna o valor da propriedade correspondente.

const person = {
  name: "John Doe",
  age: 24,
}

const encontrarPropriedade = (object, key) => {
  return object[key]
}

console.log(encontrarPropriedade(person, "name"))

// Promises:
// 7. Crie uma função chamada delayedPromise que retorna uma promise que é
// resolvida após um atraso de 1 segundo.
// 8. Crie uma função chamada fetchData que faz uma solicitação HTTP usando fetch e
// retorna uma promise com os dados obtidos.
// 9. Crie uma função chamada gerarNumeroAleatorio que retorna uma promise com
// um número aleatório após um atraso de 2 segundos.
// Timeout:
// 10. Crie uma função chamada executarAposTempo que recebe uma função e um tempo
// em milissegundos e a executa após o tempo especificado.
// 11. Crie uma função chamada cancelarExecucao que recebe um identificador de
// timeout e o cancela.
// 12. Crie uma função chamada intervaloPersonalizado que executa uma função a cada
// intervalo de tempo especificado em milissegundos.
// Interval:
// 13. Crie uma função chamada contadorInterval que inicia um contador de 1 a 10 a
// cada segundo e exibe o valor no console.
