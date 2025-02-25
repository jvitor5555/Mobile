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

    if (quantidade.value && precoUnitario.value){

        calculo.quantidade = quantidade.value
        calculo.precoUnitario = precoUnitario.value

        numero = calculo.quantidade * calculo.precoUnitario

        precoTotal.value = numero
    }

    else{
        window.alert("ERRO: Informe os dados corretamente")
    }
    
    
}

let v = 1

function BotaoSalvar() {


    if (descricao.value && quantidade.value && precoUnitario.value){

        item.descricao = descricao.value
        item.quantidade = quantidade.value
        item.precoUnitario = precoUnitario.value
        item.precoTotal = precoTotal.value

        produtos.push(item)

        let listaproduto = Object.values(item)

        for (let index = 0; index < listaproduto.length; index++) {

            const elemento = listaproduto[index];

            let criarelemento = document.createElement("div")

            criarelemento.classList.add("elemento")

            criarelemento.id = `primeiro${v}`

            criarelemento.innerText = elemento

            let minhadiv = document.getElementById("novadiv")

            minhadiv.appendChild(criarelemento)
            
            v = v + 1
        }
    }

    else{
        window.alert("ERRO: Os campos não foram preenchidos Coreetamente")
    }
}

function BotaoLimpar() {

    descricao.value = ""
    quantidade.value = ""
    precoUnitario.value = ""
    precoTotal.value = ""
}


function RemoverProdutos() {

    let tamanho_lista = listaproduto.length

    let cont = 4

    if (tamanho_lista >= 4) {

        //       12             16 - 4
        tamanho_lista = tamanho_lista - cont
    }
    // 12
    cont = tamanho_lista
            
    //        12   16
    while (cont < listaproduto.length) {

        listaproduto.pop();
        console.log("elemento removido")

        let divs = document.querySelector("elemento")
    }
}

