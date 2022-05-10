let cliente = {
    nome: 'Weverton',
    idade: 25,
    cpf: 12334534556,
    email: 'weverton@email.com',
    dependentes: [{
        nome: 'Hellen Gomes',
        parentesco: 'filha',
        dataNasc: '23/11/1997'
    }]
}

cliente.dependentes.push({
    nome: 'Maria Gomes',
    parentesco: 'filha',
    dataNasc: '19/01/1994'
})

//console.log(cliente)

let filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '23/11/1997')

console.log(filhaMaisNova[0].nome)