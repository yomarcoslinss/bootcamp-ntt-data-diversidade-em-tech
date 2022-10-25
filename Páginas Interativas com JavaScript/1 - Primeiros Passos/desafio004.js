/*
*
*   ========== DESAFIO CALCULO DE IMC ==========
*
* 2 ) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
* a condição de peso de uma pessoa adulta.
*
* Formula do IMC
* IMC = peso / (altura * altura)
*
* Elabore um algorítmo que dado o peso e a altura de um adulto, mostre a sua condição de acordo com a tabela abaixo:
*
* IMC em adultos • Condição:
*
* - Abaixo de 18.5 = Abaixo do peso;
* - Entre 18.5 e 25 = Peso normal;
* - Entre 25 e 30 = Acima do peso;
* - Entre 30 e 40 = Obeso;
* - Acima de 40 = Obesidade grave;
*
*/

let peso = 60
let altura = 1.80 /* formato: 1.99 */
let resultado = ' '
// const imc = (peso / (altura * altura).toFixed(1))
const imc = peso /Math.pow(altura, 2)

/*
* A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente;
* Math.pow(altura, 2) irá calcular altura * altura;
* Math.pow(altura, 3) irá calcular altura * altura * altura, e assim por diante.  
*/


if (imc < 18.5) {
    resultado = ('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
    resultado =('Peso normal')
} else if (imc >= 25 && imc < 30) {
    resultado = ('Acima do peso')
} else if (imc >= 30 && imc < 40) {
    resultado =('Obeso')
} else {
    resultado =('Obesidade grave')
}

console.log (`Seu IMC  consta como ${imc.toFixed(2)} - ${resultado}`)
