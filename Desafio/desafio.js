const descricao = document.getElementById("descricao")
const quantidade = document.getElementById("quantidade")
const precoUnitario = document.getElementById("precounitario")
const precoTotal = document.getElementById("precototal")

const calcular = {

    "quantidade": Number,
    "preço Unitário": Number
}

const produto = {

    "descrição": String,
    "quantidade": Number,
    "preço Unitário": Number,
    "preço Total": Number
}

const produtos = []

let item = Object.create(produto)
let calculo = Object.create(calcular)

let numero = 0

function BotaoCalcular() {
    
    calculo.quantidade = quantidade.value
    calculo.precoUnitario = precoUnitario.value

    numero = calculo.quantidade * calculo.precoUnitario

    precoTotal.value = numero
}

function BotaoSalvar() {
    
    item.descricao = descricao.value
    item.quantidade = quantidade.value
    item.precoUnitario = precoUnitario.value
    item.precoTotal = precoTotal.value

    produtos.push(item)

    const listaproduto = Object.values(item)

    for (let index = 0; index < listaproduto.length; index++) {

        const elemento = listaproduto[index];

        let criarelemento = document.createElement("div")

        criarelemento.classList.add("elemento")

        criarelemento.innerText = elemento

        let minhadiv = document.getElementById("novadiv")

        minhadiv.appendChild(criarelemento)
        
    }
    
  
}

function BotaoLimpar() {

    descricao.value = ""
    quantidade.value = ""
    precoUnitario.value = ""
    precoTotal.value = ""
}