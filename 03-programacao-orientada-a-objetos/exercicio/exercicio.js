// crie uma classe chamada Prisma que aceita um array de numeros, representando os valores dos lados do prisma.
// crie subclasses para cada forma geometrica diferente, por exemplo triangulo, rectangulo, pentagono, etc... com metodos para calcular a sua área e o seu perimetro

class Prisma {
  constructor(lados) {
    this.lados = lados

    this.calcularPerimetro
  }

  calcularPerimetro(a, b) {
    return a + b
  }
  calcularPerimetro(a) {
    return a - 2
  }
}

// class Triangulo extends Prisma {
//   calcularArea() {
//     super()
//     return this.lados[0] + this.lados[1] / 2
//   }
// }

// class Retangulo extends Prisma {
//   calcularArea(valores) {
//     super()

//     return valores.reduce((area, valor) => {
//       return area * valor
//     })
//   }

// }

// const valoresTriangulo = [2, 3, 3]
// const triangulo = new Triangulo()
// const areaTringulo = triangulo.calcularArea(valoresTriangulo)
// const perimetroTringulo = triangulo.calcularPerimetro(valoresTriangulo)

// console.log({
//   areaTringulo,
//   perimetroTringulo
// })


// const valoresRetangulo = [2, 3]
// const retangulo = new Retangulo()
// const areaRetangulo = retangulo.calcularArea(valoresRetangulo)
// const perimetroRetangulo = retangulo.calcularPerimetro(valoresRetangulo)

// console.log({
//   areaRetangulo,
//   perimetroRetangulo
// })


const a = new Prisma()
console.log(a.calcularPerimetro(3))