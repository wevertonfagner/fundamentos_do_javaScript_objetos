class Cliente {
    constructor (nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar (valor) {
        this.saldo += valor
    }

    exibirSaldo () {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor (nome, email, cpf, saldo, saldoPoupanca) {
        super (nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
    }
}

let andre = new ClientePoupanca ("Andre", "andre@email.com", "12312312343", 100, 200)

console.log(andre)

//depositando

andre.depositar(50)
andre.depositarPoupanca(50)

console.log (andre)