function sortear() {
    if (validarDados()) {
        quantidadeDeNumeros = coletarDados()[0];

        const numerosSorteados = new Set();
        while (numerosSorteados.size < quantidadeDeNumeros) {
            numerosSorteados.add(gerarNumeroAleatorio());
        }
        mostrarNaTela([...numerosSorteados]);


        // const numerosSorteados = [];
        // while (numerosSorteados.length < quantidadeDeNumeros) {
        //     numeroAleatorio = gerarNumeroAleatorio();
        //     if(!numerosSorteados.includes(numeroAleatorio)){
        //         numerosSorteados.push(numeroAleatorio);
        //     }
        // }
        // mostrarNaTela(numerosSorteados);

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
    let numeroAleatorio = Math.round((Math.random() * (numeroFinal - numeroInicial) + numeroInicial));
    return numeroAleatorio;
}

function mostrarNaTela(numerosSorteados) {
    let mensagem = numerosSorteados.length > 1 ? "Números sorteados: " : "Número sorteado: ";
    for (let i = 0; i < (numerosSorteados.length - 1); i++) {
        mensagem += `${numerosSorteados[i]}, `;
    }
    mensagem += `${numerosSorteados[numerosSorteados.length - 1]}.`;
    console.log(mensagem);
    resultado.textContent = mensagem;
}

const botaoSortear = document.querySelector("#btn-sortear");
const botaoReiniciar = document.querySelector("#btn-reiniciar");

const inputQuantidade = document.querySelector("#quantidade");
const inputDe = document.querySelector("#de");
const inputAte = document.querySelector("#ate");
const resultado = document.querySelector("#resultado label");

