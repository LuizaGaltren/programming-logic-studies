const input1 = prompt("Informe o primeiro número:")
const input2 = prompt("Informe o segundo número:")

const x = parseFloat(input1)
const y = parseFloat(input2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)