
/* 
*
* Uma sala contém 5 alunos e pra cada aluno foi sorteado um número de 1 a 100.
* Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
*
* Dados de entrada:
* 5
* 10
* 98
* 23
*
* Saída:
* 98
*
*/

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];
for (i = 0 ; i < 5 ; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}

let maiorValor = -1;

for (i = 0 ; i < numerosSorteados.length ; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);