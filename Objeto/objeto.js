let nome = document.getElementById("nome")
let email = document.getElementById("email")
let telefone = document.getElementById("telefone")

const pessoa = {

    "nome" : String,
    "email": String,
    "telefone": String
}

let dados = []

let titulos = ["Nome", "Email", "Telefone"]

let numero = 0

let cliente = Object.create(pessoa)

function BotaoSalvar() {

    cliente.nome = nome.value
    cliente.email = email.value
    cliente.telefone = telefone.value

    dados.push(cliente)

    console.log(cliente)

}

function BotaoListar() {

    const valores = Object.values(cliente) // retorna uma lista apenas com os valores

    for (let index = 0; index < valores.length; index++) {

        const elemento = valores[index];

        

        let caixa = document.createElement("div")
        let titulo = document.createElement("p")

        caixa.classList.add("card")
        titulo.classList.add("paragrafo")
        
        titulo.innerText = titulos[numero]
        caixa.innerText = elemento

        let novadiv = document.getElementById("novadiv")

        novadiv.appendChild(titulo)
        novadiv.appendChild(caixa)
        numero = numero + 1
    }
}

function BotaoLimpar() {

    nome.value = ""
    email.value = ""
    telefone.value = ""
}