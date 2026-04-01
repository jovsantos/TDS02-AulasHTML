const url = "https://viacep.com.br/ws/45000630/json";

// fetch(url)
// .then(resposta => resposta.json())
// .then(dados => console.log(dados))

const campoCep = document.querySelector('#cep');
const botaoBuscar = document.querySelector('#btnBuscar');
const campoLogradouro = document.querySelector('#logradouro');
const campoBairro = document.querySelector('#bairro');
const campoCidade = document.querySelector('#cidade');
const campoEstado = document.querySelector('#estado');

async function buscarCep() {

    const cepDigitado = campoCep.value;

    const url = `https://viacep.com.br/ws/${cepDigitado}/json`;   

    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);

    campoLogradouro.value = dados.logradouro
    campoBairro.value = dados.bairro
    campoCidade.value = dados.localidade
    campoEstado.value = dados.estado

}

botaoBuscar.addEventListener("click", buscarCep)