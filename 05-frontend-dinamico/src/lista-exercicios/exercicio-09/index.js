// 9. Crie uma função chamada gerarNumeroAleatorio que retorna uma promise com
// um número aleatório após um atraso de 2 segundos.


const gerarNumeroAleatorio = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((Math.random() * 100).toFixed(0))
    }, 2000)
  })
}

gerarNumeroAleatorio().then(result => console.log(result))
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
