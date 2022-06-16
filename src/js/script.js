/*
const precoRefrigerante = 11.99;
const precoMacarrao = 6.99;
const precoErvilha = 6.99;
const precoArroz = 22.99;
const precoFeijao = 11.89;
const precoVinho = 70.00;
*/

let precoRefrigerante = parseFloat(prompt("Digite o preço do refrigerante: por exemplo, 11.99"));
let precoMacarrao = parseFloat(prompt("Digite o preço do macarrão: por exemplo, 6.99"));
let precoErvilha = parseFloat(prompt("Digite o preço da ervilha: por exemplo, 6.99"));
let precoArroz = parseFloat(prompt("Digite o preço do arroz: por exemplo, 22.99"));
let precoFeijao = parseFloat(prompt("Digite o preço do feijão: por exemplo, 11.89"));
let precoVinho = parseFloat(prompt("Digite o preço do vinho: por exemplo, 70.00"));

let quantidadeRefrigerante = parseInt(prompt("Quantos refrigerantes você quer? Por exemplo, 3"));
let quantidadeMacarrao = parseInt(prompt("Quantos macarrões você quer? Por exemplo, 4"));
let quantidadeErvilha = parseInt(prompt("Quantos ervilhas você quer? Por exemplo, 3"));
let quantidadeArroz = parseInt(prompt("Quantos arrozes você quer? Por exemplo, 3"));
let quantidadeFeijao = parseInt(prompt("Quantos feijões você quer? Por exemplo, 2"));
let quantidadeVinho = parseInt(prompt("Quantos vinhos você quer? Por exemplo, 3"));

let totalRefrigerante = quantidadeRefrigerante * precoRefrigerante;
let totalMacarrao = quantidadeMacarrao * precoMacarrao;
let totalErvilha = quantidadeErvilha * precoErvilha;
let totalArroz = quantidadeArroz * precoArroz;
let totalFeijao = quantidadeFeijao * precoFeijao;
let totalVinho = quantidadeVinho * precoVinho;

let total = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;

if(total % 2 == 0){
    let totalSemVinho = total - totalVinho;
    let metadeSemVinho = totalSemVinho / 2;
    console.log(`O total da compra é ${total} reais. Você deverá pagar ${metadeSemVinho} reais e o seu amigo pagará ${metadeSemVinho + totalVinho} reais`);
    alert(`O total da compra é ${total} reais. Você deverá pagar ${metadeSemVinho} reais e o seu amigo pagará ${metadeSemVinho + totalVinho} reais`);
}
else{
    let metade = total / 2;
    console.log(`O total da compra é ${total} reais. Você deverá pagar ${metade} reais e o seu amigo pagará ${metade} reais`);
   alert(`O total da compra é ${total} reais. Você deverá pagar ${metade} reais e o seu amigo pagará ${metade} reais`);
}
