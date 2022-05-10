let cliente = {
    nome: 'Weverton',
    idade: 25,
    cpf: 12334534556,
    email: 'weverton@email.com',
    fones: ["81926354726", "11963547173"],
    dependentes: [{
        nome: 'Hellen Gomes',
        parentesco: 'filha',
        dataNasc: '23/11/1997'
    },
    {
        nome: 'Maria Gomes',
        parentesco: 'filha',
        dataNasc: '19/01/1994'
    }],

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)