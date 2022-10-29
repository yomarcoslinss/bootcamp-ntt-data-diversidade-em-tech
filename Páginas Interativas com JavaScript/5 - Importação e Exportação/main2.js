// A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

/*
*
* No lugar de importar dessa maneira : const funcoes = require('./funcoes-auxiliares');
* Eu uso:
*
*/


const {gets, print} = require('./funcoes-auxiliares');
print('aeiou');
print(gets());
// Eu extrai diretamente as funções "gets" e "print" de outro script.
