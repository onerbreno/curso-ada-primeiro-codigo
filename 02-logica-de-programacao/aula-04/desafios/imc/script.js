const botaoCalcular = document.getElementById('calcular')

botaoCalcular.onclick = () => {
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value

  const imc = (peso / (altura * altura)).toFixed(2)

  let message
  if (imc <= 18.5) {
    message = 'Abaixo do peso'
  } else if (imc <= 24.) {
    message = 'Peso normal'
  } else if (imc <= 29.9) {
    message = 'Sobrepeso'
  } else {
    message = 'Obesidade'
  }
  resultado.innerHTML = `${message}. IMC: ${imc.replace('.', ',')}` 
}
