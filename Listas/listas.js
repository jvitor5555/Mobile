let nome = document.getElementById("nome")
let email = document.getElementById("email")
let telefone = document.getElementById("telefone")

let dados = []

let titulos = ["Nome", "Email", "Telefone"]

let numero = 0

function BotaoSalvar() {

    const n = nome.value
    const e = email.value
    const t = telefone.value

    dados.push(n, e, t)
    
    console.log(dados)
}



function BotaoListar() {
    
    for (let index = 0; index < dados.length; index++) {

        const elemento = dados[index];

        let caixa = document.createElement("div")
        let titulo = document.createElement("p")
        
        caixa.classList.add("card")

        caixa.innerText = elemento
        titulo.innerText = titulos[numero]

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