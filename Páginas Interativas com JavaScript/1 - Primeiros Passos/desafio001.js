/*
*
* Faça um programa para calcular o valor de uma viagem.
*
* Você terá 3 variáveis. Sendo elas:
* 1 - Preço do cobustivel;
* 2 - Gasto médio de combustível do carro em KM;
* 3 - Distância em KM da viagem;
*
*
* toFixed() - Arredonda o número de digitos depois da casa decimal
*/

const valorCombustivel = 5.79;
const kmPorLitro = 10;
let distancia = 100;

const calculo = distancia / kmPorLitro * valorCombustivel;

console.log(`Em uma viagem de ${distancia}KM, o seu carro irá fazer ${kmPorLitro}KM por litro, se o valor da gasolina atualmente é R$10, você irá gastar R$${calculo.toFixed(2)}`)


/* Acertei de primeira xD */ 