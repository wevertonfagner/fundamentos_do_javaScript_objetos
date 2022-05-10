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

let andre = new Cliente("Andre", "andre@email.com", "11122233345", 100)

console.log (andre)