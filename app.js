function sortear() {
    if (validarDados()) {
        let quantidadeDeNumeros = coletarDados()[0];

        const numerosSorteados = new Set();
        while (numerosSorteados.size < quantidadeDeNumeros) {
            numerosSorteados.add(gerarNumeroAleatorio());
        }
        mostrarNaTela([...numerosSorteados]);
        
        habilitarBotaoReiniciar();
    } else {
        alert("Os valores inseridos não são válidos:\n - Todos devem ser maiores do que 1.\n - A quantidade deve ser maior que o intervalo.\n - O número final deve ser maior que o número inicial.");
    }
}

function validarDados() {
    let validado = true;
    dados = coletarDados();
    let intervalo = (dados[2] - dados[1]) + 1;
    for (let i = 0; i < 3; i++) {
        if (isNaN(dados[i]) || dados[i] < 1) validado = false;
    }
    if (dados[0] > intervalo) validado = false;
    return validado;
}

function habilitarBotaoReiniciar() {
    botaoReiniciar.classList.replace("container__botao-desabilitado", "container__botao");
    botaoReiniciar.disabled = false;
    botaoSortear.classList.replace("container__botao", "container__botao-desabilitado");
    botaoSortear.disabled = true;
}

function habilitarBotaoSortear() {
    botaoSortear.classList.replace("container__botao-desabilitado", "container__botao");
    botaoSortear.disabled = false;
    botaoReiniciar.classList.replace("container__botao", "container__botao-desabilitado");
    botaoReiniciar.disabled = true;
}

function coletarDados() {
    let dados = [];
    let quantidadeDeNumeros = parseInt(inputQuantidade.value);
    let numeroInicial = parseInt(inputDe.value);
    let numeroFinal = parseInt(inputAte.value);
    dados.push(quantidadeDeNumeros, numeroInicial, numeroFinal);
    return dados;
}

function reiniciar() {
    inputQuantidade.value = "";
    inputDe.value = "";
    inputAte.value = "";
    resultado.textContent = "Números sorteados:  nenhum até agora";
    habilitarBotaoSortear();
}

function gerarNumeroAleatorio() {
    numeroInicial = coletarDados()[1];
    numeroFinal = coletarDados()[2];
    return Math.round((Math.random() * (numeroFinal - numeroInicial) + numeroInicial));
}

function mostrarNaTela(numerosSorteados) {
    let mensagem = numerosSorteados.length > 1 ? "Números sorteados: " : "Número sorteado: ";
    resultado.textContent = mensagem + numerosSorteados.join(", "); 
}

const botaoSortear = document.getElementById("btn-sortear");
const botaoReiniciar = document.getElementById("btn-reiniciar");

const inputQuantidade = document.getElementById("quantidade");
const inputDe = document.getElementById("de");
const inputAte = document.getElementById("ate");
const resultado = document.querySelector("#resultado label");

