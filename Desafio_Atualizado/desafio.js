const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const precoUnitario = document.getElementById("precounitario");
const precoTotal = document.getElementById("precototal");
let novo_campo = document.getElementById("panel");

const calcular = {
    "quantidade": Number,
    "preço Unitário": Number
};

let calculo = Object.create(calcular);
let numero = 0;
let produtos = [];

function BotaoCalcular() {
    if (quantidade.value && precoUnitario.value) {
        calculo.quantidade = quantidade.value;
        calculo.precoUnitario = precoUnitario.value;
        numero = calculo.quantidade * calculo.precoUnitario;
        precoTotal.value = numero;
    } else {
        window.alert("ERRO: Informe os dados corretamente");
    }
}

let v = 1;

function BotaoSalvar() {
    if (descricao.value && quantidade.value && precoUnitario.value && precoTotal.value) {
        item = {
            "descricao": descricao.value,
            "quantidade": parseFloat(quantidade.value),
            "preço Unitário": parseFloat(precoUnitario.value),
            "preço Total": parseFloat(precoTotal.value)
        };

        produtos.push(item);
        BotaoFiltrar();
        AbrirBotao();

        const listaproduto = Object.values(item);

        for (let index = 0; index < listaproduto.length; index++) {
            const elemento = listaproduto[index];
            let criarelemento = document.createElement("div");
            criarelemento.classList.add("elemento");
            criarelemento.innerText = elemento;
            let minhadiv = document.getElementById("novadiv");
            minhadiv.appendChild(criarelemento);
        }
    } else {
        window.alert("ERRo: Impossivel salvar dados Nulos");
    }
}

function BotaoLimpar() {
    if (descricao.value || quantidade.value || precoUnitario.value || precoTotal.value || filtrar.value) {
        descricao.value = "";
        quantidade.value = "";
        precoUnitario.value = "";
        precoTotal.value = "";
        filtrar.value = "";
        window.alert("Os campos foram limpos");
    } else {
        window.alert("Não há nada para Limpar");
    }
}

let lista_remover = [];

function RemoverProdutos() {
    const divs = document.getElementById("novadiv");
    const elementos = Array.from(divs.getElementsByClassName("elemento"));

    if (elementos.length >= 4) {
        let opcao = Number(prompt("Informe o número da linha que deseja remover: (Exemplo --- 1° Linha = 1)"));
        let elementosremovido = [];
        let cont = 0;

        if (opcao) {
            let indice_inicial = (opcao - 1) * 4; // Pegar onde o indice que deve ser apagado começa
            let indice_final = indice_inicial + 4; // pegar onde o indice que ser apagado termina

            for (let i = indice_final - 1; i >= indice_inicial; i--) {
                elementosremovido.push(elementos[i].textContent);
                elementos[i].remove();
                cont = cont + 1;
            }

            lista_remover = [...lista_remover, ...elementosremovido];

            produtos = produtos.filter(x => !lista_remover.includes(x.descricao));
            BotaoFiltrar();
        } else {
            window.alert("Caro usuário, insira um número válido, por favor.");
        }
    } else {
        window.alert("Não existem elementos para serem removidos");
    }

    return produtos;
}

function BotaoFiltrar() {
    let f = filtrar.value.trim().toLowerCase();
    novo_campo.innerHTML = "";

    if (f) {
        let filtrados = produtos.filter(x => x.descricao && x.descricao.toLowerCase().includes(f.toLowerCase()));

        if (filtrados.length > 0) {
            filtrados.forEach(x => {
                const div_no_painel = document.createElement("div");
                div_no_painel.classList.add("div-no-painel");
                div_no_painel.innerHTML = `
                    <p>Descrição: ${x.descricao}</p>
                    <p>Quantidade: ${x.quantidade}</p>`;
                novo_campo.appendChild(div_no_painel);
            });
        } else {
            window.alert("Nenhum produto encontrado.");
        }
    } else {
        produtos.forEach(x => {
            const div_no_painel = document.createElement("div");
            div_no_painel.classList.add("div-no-painel");
            div_no_painel.innerHTML = `
                <p>Descrição: ${x.descricao}</p>
                <p>Quantidade: ${x.quantidade}</p>`;
            novo_campo.appendChild(div_no_painel);
        });
    }

    AbrirBotao();
}

function AbrirBotao() {
    let btn = document.querySelector(".accordion");
    let panel = document.querySelector(".panel");
    let arrow = document.querySelector(".arrow");

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        arrow.textContent = "⬇";
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        arrow.textContent = "⬆";
    }
}

const filtrar = document.getElementById("filtrar");
filtrar.addEventListener("input", BotaoFiltrar);

AbrirBotao();
