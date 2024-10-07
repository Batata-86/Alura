let nuemroSecreto = gerarNumeroAleatorio();

//alterar o titulo 
let titutlo = document.querySelector('h1');
titutlo.innerHTML = 'Jogo do BATATA';

//alterar o subtitulo 
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function verificaChute(){
        console.log(nuemroSecreto)
}
function gerarNumeroAleatorio() {
       return parseInt(Math.random() * 10 + 1 );   
console.log(nuemroSecreto)



}