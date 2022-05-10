let cliente = {
    nome: 'Weverton',
    idade: 25,
    cpf: 12334534556,
    email: 'weverton@email.com',
    fones: ["81926354726", "11963547173"]
}

cliente.dependentes =  {
    nome: "Hellen",
    parentesco: "filha",
    dataNasc: "23/11/1997"
}

console.log(cliente)

cliente.dependentes.nome = "Hellen Gomes"

console.log(cliente)