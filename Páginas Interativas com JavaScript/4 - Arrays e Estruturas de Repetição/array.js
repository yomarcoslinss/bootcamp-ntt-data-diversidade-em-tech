/*
*
* Uma array, diferente de uma variável, pode armazenar diversos valores (de diversos tipos)
*
*/

// Declarando uma array:
const alunos = ['João', 'Vitor', 'Marina'];

// Pode ser usado para criar um novo valor na minha array(nesse caso, eu criei o aluno Marcos)
alunos.push('Marcos');

// Pode ser usado para adicionar e subsituir os valores numa array (nesse caso, eu substitui o aluno da indice 0: "João", para: "Vinícius")
alunos[0] = 'Vinícius';

// Usado para imprimir a minha array
console.log(alunos);

// Usado para imprimir o valor na indice 0
console.log(alunos[0]);

// Usado para imprimir o valor na indice 2
console.log(alunos[2]);