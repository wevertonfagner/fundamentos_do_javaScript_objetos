let cliente = {
    nome: 'Weverton',
    idade: 25,
    cpf: 12334534556,
    email: 'weverton@email.com' 
}

let chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))