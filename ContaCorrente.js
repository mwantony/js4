import { Cliente } from "./Cliente"

export class ContaCorrente {
    agencia
    
    
    _cliente 

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    _saldo = 0

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor
        }
    }

    transferir(valor, conta) {
/*         this.sacar(valor)
 */        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}