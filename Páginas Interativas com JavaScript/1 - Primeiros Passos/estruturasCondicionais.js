/* 
* boolean: verdadeiro, falso
*
*
* = : atribuição
* == : igual (ignora o tipo)
* === : igual (não compara tipos diferentes, ex: 0 não é igual a "0")
* ! : negação
*
* if = se
* else = se não
* 
*/



const numero = 3;

const numeroPar = (numero % 2) == 0;
console.log(numeroPar);

if (numeroPar) {
    console.log("Par");
}

if (!numeroPar) {
    console.log("Impar")
}


console.log("Solução 2")


console.log(numeroPar)
if (numeroPar) {
    console.log("Par")
} else {
    console.log("Impar")
}
