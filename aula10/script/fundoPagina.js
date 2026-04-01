const botaoVermelho = document.getElementById('btnRed');
const botaoVerde = document.getElementById('btnGreen');
const botaoAzul = document.getElementById('btnBlue');
const botaoAmarelo = document.getElementById('btnYellow');
const botaohide = document.querySelector("#btnHide"); //Pegar por ID -> utilizar #
const titulo = document.querySelector("#titulo");
const botaoTema = document.querySelector("#btnTema");
 
function alterarCor(cor){
    document.body.style.backgroundColor = cor;
 
}
 
botaoVermelho.addEventListener('click', () => alterarCor('red'));
 
botaoVerde.addEventListener('click', () => alterarCor('green'));
 
botaoAzul.addEventListener('click', () => alterarCor('blue'));
 
botaoAmarelo.addEventListener('click', () => alterarCor('yellow'));
 
botaohide.addEventListener('click', () =>{
    //classList.add -> adiciona uma classe ao elemento 'titulo'
    // titulo.classList.add('invisivel');
 
    //classList.toggle -> se a classe existir, ele remove
    // se não existir, ele adiciona
    titulo.classList.toggle('invisivel');
 
    // if(botaohide.textContent == "Esconder titulo") {
    //     botaohide.textContent = "Mostrar titulo";
    // }else {
    //     botaohide.textContent = "Esconder titulo";
    // }
 
    //if ternário
    botaohide.textContent =
    botaohide.textContent ==
    "Esconder titulo" ?
    "Mostrar titulo" :
    "Esconder titulo";
 
 
} );
 
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('temaEscouro');
    if(botaoTema.textContent == "Tema escuro") {
        botaoTema.textContent = "Tema claro";
 
    }else {
        botaoTema.textContent = "Tema escuro";
    }
});