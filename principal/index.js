import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "/ContaCorrente.js" 

//Cliente 1
const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309

//Cliente 2
const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309


const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1
contaCorrenteRicardo.depositar(200)
contaCorrenteRicardo.depositar(50)

const conta2 = new ContaCorrente()
conta2.cliente = 0
conta2.agencia = 1002

contaCorrenteRicardo.transferir(200, conta2)




console.log(conta2)
console.log(contaCorrenteRicardo)
