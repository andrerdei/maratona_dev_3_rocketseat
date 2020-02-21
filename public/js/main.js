// Declaração das Variáveis Globais

const botaoCabecalho = document.querySelector(".cabecalho-principal button");
const formDoacao = document.querySelector(".formulario-principal");


// Cahamadas

botaoCabecalho.onclick = toggleFormDeDoacao;
    

// Funções

function toggleFormDeDoacao() {
    formDoacao.classList.toggle("invisivel");
    formDoacao.classList.contains("invisivel-altura") ? formDoacao.classList.remove("invisivel-altura") : setTimeout(() => {formDoacao.classList.add("invisivel-altura")}, 500)
}