let listaDeNumsSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarONumero();
let tentativas = 1;

function textosDaTela(tag, texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    textosDaTela('h1', 'Qual o Número Secreto?');
    textosDaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        textosDaTela ('h1', 'BOA!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você acertou com ${tentativas} ${palavraTentativa}`;

        textosDaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
                textosDaTela ('p', 'O número é menor');
        } else {
            textosDaTela ('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarONumero() {
   
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumsSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumsSorteados = [];
    }
   
   if(listaDeNumsSorteados.includes(numeroEscolhido)) {
        return gerarONumero();
   } else {
    listaDeNumsSorteados.push(numeroEscolhido)
    console.log (listaDeNumsSorteados)
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarONumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}