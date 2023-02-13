let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Resgatar dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao){
    case "1":
        saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
        break
    case "2":
        saldo -= prompt("Informe o valor a ser resgatado:")
        break
    case "3":
        alert("Saindo...")
        break
    default:
        alert("Entrada inválida.")
        break
  }

} while (opcao !== "3");