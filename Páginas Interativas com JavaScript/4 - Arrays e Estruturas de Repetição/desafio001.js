// 1 - Crie um programa, que dado um número, imprima a sua tabuada.

const valor = 7

for (num = 0 ; num <= 10 ; num++) {
    console.log(num * valor)
}

console.log('Outra maneira de resolução')


let tabuada = [];

tabuada.push(1);
tabuada.push(2);
tabuada.push(3);
tabuada.push(4);
tabuada.push(5);
tabuada.push(6);
tabuada.push(7);
tabuada.push(8);
tabuada.push(9);
tabuada.push(10);

let calcular = 9;

for(i = 0; i < tabuada.length ; i++) {
    const multiplicar = calcular * tabuada[i];
    console.log(multiplicar)
}
