// crie uma classe Calculadora, com métdos aritmeticos, por exemplo adicionar(), subtrair(), multiplicar(), etc... O construtor da classe deve receber um numero inicial, e depois os métodos devem modificar esse numero,  por fim um método resultado() para retornar o valor final.
// exemplo de utilizaçao:
// const calculadora = new Calculadora(52);
// const resultado = calculadora.adicionar(50).subtrair(10).multiplicar(2).resultado()

class Calculadora {
  constructor(numeroInicial) {
    this.resultadoAtual = numeroInicial
  }

  adicao(numero) {
    this.resultadoAtual += numero
    return this
  }
  
  subtracao(numero) {
    this.resultadoAtual -= numero
    return this
  }
  
  multiplicacao(numero) {
    this.resultadoAtual *= numero
    return this
  }
  
  divisao(numero) {
    this.resultadoAtual /= numero
    return this
  }
  
  resultado() {
    console.log(`O resultado é: ${this.resultadoAtual}`)
    return this.resultadoAtual
  }

}

const calculadora = new Calculadora(52)

const resultado = calculadora.adicao(50).subtracao(10).multiplicacao(2).resultado()