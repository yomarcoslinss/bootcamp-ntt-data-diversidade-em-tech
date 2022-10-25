/*
*
* Funções são pequenos trechos de código que podemos invocar a sua execução a qualquer momento !
* 
*/


function teste() {
    console.log('Teste')
}

// Invocando uma função:
teste(); 
teste();



function sayMyName(name) {
    console.log('Your name is ' + name)
}
sayMyName('Marcos');
sayMyName('Linss');




function nomeCompleto(nome, sobrenome) {
    console.log(`Seu nome completo é ${nome} ${sobrenome}`)
}
nomeCompleto('Marcos', 'Linss');





function aoQuadrado(valor0) {
    return valor0 * valor0
}
console.log(aoQuadrado(10));





function aoQuadrado2(valor2) {
    return Math.pow(valor2, 2)
}
const quadradoDeCinquenta = aoQuadrado2(50);
console.log(quadradoDeCinquenta)





/* Essa função incrementa 10% de juros em algum valor */
function incrementarJuros(precoProduto) {
    return precoProduto + (precoProduto * 0.10)
}
console.log(incrementarJuros(100))




/* Essa função da o desconto de 15% em algum valor */
function descontoJuros(precoProduto) {
    return precoProduto - (precoProduto * 0.15)
}
console.log(descontoJuros(100))




// Com essa função, eu posso adicionar o valor de um produto, e a porcentagem de juros que irá somar ao seu valor.
function incrementarJuros(valor, juros) {
    return valor + (valor * juros / 100);
}
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(75, 50));