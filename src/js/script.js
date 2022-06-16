const precoRefrigerante = 11.99;
const precoMacarrao = 6.99;
const precoErvilha = 6.99;
const precoArroz = 22.99;
const precoFeijao = 11.89;
const precoVinho = 70.00;

let quantidadeRefrigerante = parseInt(prompt("Quantos refrigerantes você quer?"));
let quantidadeMacarrao = parseInt(prompt("Quantos macarrões você quer?"));
let quantidadeErvilha = parseInt(prompt("Quantos ervilhas você quer?"));
let quantidadeArroz = parseInt(prompt("Quantos arrozes você quer?"));
let quantidadeFeijao = parseInt(prompt("Quantos feijões você quer?"));
let quantidadeVinho = parseInt(prompt("Quantos vinhos você quer?"));

let totalRefrigerante = quantidadeRefrigerante * precoRefrigerante;
let totalMacarrao = quantidadeMacarrao * precoMacarrao;
let totalErvilha = quantidadeErvilha * precoErvilha;
let totalArroz = quantidadeArroz * precoArroz;
let totalFeijao = quantidadeFeijao * precoFeijao;
let totalVinho = quantidadeVinho * precoVinho;

let total = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;
let metade = total / 2;

if(total % 2 == 0){
    console.log(`O total da compra é ${total} reais. Você deverá pagar ${metade - totalVinho} reais e o seu amigo pagará ${metade + totalVinho} reais`);
    alert(`O total da compra é ${total} reais. Você deverá pagar ${metade - totalVinho} reais e o seu amigo pagará ${metade + totalVinho} reais`);
}
else{
    console.log(`O total da compra é ${total} reais. Você deverá pagar ${metade} reais e o seu amigo pagará ${metade} reais`);
   alert(`O total da compra é ${total} reais. Você deverá pagar ${metade} reais e o seu amigo pagará ${metade} reais`);
}
