function cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

let andre = new cliente("Andre", "12543595433", "andre@email.com", 100)

console.log(andre)