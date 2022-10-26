/* 
*
* No JS, um objeto é uma coleção dinâmica de chave e valor.
*
*/


// Estrutura de um objeto literal:
const marcos = {
    nome: 'Marcos Vinícius Barbosa dos Santos',
    idade: 19
}

// Editando um valor do meu objeto:
marcos.nome = 'Marcos Linss';

// Adicionando um par chave/valor ao meu objeto:
marcos.altura = 1.69;


// Removendo um par chave/valor do meu objeto
delete marcos.idade;


console.log(marcos) // Irá imprimir o meu objeto todo.
console.log(marcos.idade) // Irá imprimir o meu par chave/valor "idade", que está dentro do meu objeto.
console.log(marcos.altura) // Irá imprimir o meu par chave/valor "altura", que está dentro do meu objeto.