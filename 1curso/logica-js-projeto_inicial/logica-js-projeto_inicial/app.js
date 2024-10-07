alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4 
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entree 1 e 10');

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    console.log(`Excelente você descobriu o numero secreto ${numeroSecreto}`);
} else{
    alert('você errou :/')
}
