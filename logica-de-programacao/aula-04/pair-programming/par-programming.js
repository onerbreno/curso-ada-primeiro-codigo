const peso = Number(prompt('Digite seu peso (kg): '))
const altura = Number(prompt('Digite sua altura (m): '))

const imc = peso / (altura * altura)

if (imc <= 18.5) {
  alert('Abaixo do peso')
} else if (imc <= 24.) {
  alert('Peso normal')
} else if (imc <= 29.9) {
  alert('Sobrepeso')
} else {
  alert('Obesidade')
}


