let clientes = [
    {
        nome: "André",
        cpf: "12312312323",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },{
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01;2014"
        }],
    },{
        nome: "Juliana",
        cpf: "12345612334",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

let listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)