/*
*
* Faça um programa para calcular o valor de uam viagem.
* Você terá 5 variáveis. Sendo elas:
*
* 1 - Preço do etanol;
* 2 - Preço da gasolina;
* 3 - O tipo de combustível que está no seu carro;
* 4 - Gasto médio do combustível no carro (em KM);
* 5 - Distância em KM da viagem;
*
* Imprima no console o valor que será gasto para realizar essa viagem !
* 
*/

const combustivelNoCarro = 'etanol';

const valorEtanol = 2.59;
const valorGasolina = 5.39;
let kmPorLitro = "";
const distanciaViagem = 2360;



if (combustivelNoCarro === 'gasolina') {
    kmPorLitro = 16;
    console.log(`Em uma viagem de casa para Alagoas, eu irei percorrer ${distanciaViagem}KM, gastando R$${(distanciaViagem / kmPorLitro * valorGasolina).toFixed(2)}, no meu carro que faz ${kmPorLitro}KM por litro de ${combustivelNoCarro}.`);
} else if (combustivelNoCarro === 'etanol') {
    kmPorLitro = 10;
    console.log(`Em uma viagem de casa para Alagoas, eu irei percorrer ${distanciaViagem}KM, gastando R$${(distanciaViagem / kmPorLitro * valorEtanol).toFixed(2)}, no meu carro que faz ${kmPorLitro}KM por litro de ${combustivelNoCarro}. `);
} else {
    console.log('ERRO !!! Digite um combustível válido (gasolina ou etanol)');
}

