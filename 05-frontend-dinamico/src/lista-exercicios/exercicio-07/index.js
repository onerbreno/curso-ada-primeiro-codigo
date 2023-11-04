// Promises:
// 7. Crie uma função chamada delayedPromise que retorna uma promise que é
// resolvida após um atraso de 1 segundo.

const delayedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolvido")
    }, 1000)
  })
}

delayedPromise()
  .then((result) => {
    console.log(result); // Isso será impresso após 1 segundo
  })
  .catch((error) => {
    console.error(error);
  });

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
