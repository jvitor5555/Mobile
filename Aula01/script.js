var produtos = ["Mesa", "Cadeira", "Armario", "Geladeira"]

var precos = [10.99, 50.90, 20, 44]

var indice = 0

const container = document.getElementById("container")

for (let item = 0; item < produtos.length; item++) {

    const criarElemento = document.createElement("div")
    const gerarElemento = document.createElement("p")

    const produto = produtos[item];

    criarElemento.innerText = produto

    if (item < precos.length) {
        gerarElemento.innerText = `Preço: R$ ${precos[item].toFixed(2)}`;
    } else {
        gerarElemento.innerText = "Preço: Indisponível";
    }

    criarElemento.appendChild(gerarElemento);
    container.appendChild(criarElemento);
   
}

