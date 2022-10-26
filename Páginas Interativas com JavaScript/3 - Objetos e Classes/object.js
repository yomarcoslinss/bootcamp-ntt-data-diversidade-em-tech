/* 
*
* No JS, um objeto é uma coleção dinâmica de chave e valor.
* Segue abaixo a estrutura de um Objeto Literal :
* Uma função dentro de um objeto, é chamada de Método!
* Ao declarar um método, eu não preciso escrever 'function'
*
*/

const pessoa = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
};

pessoa.nome = 'Renan';
pessoa.idade = 30;


pessoa.descrever()

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

// Adicionando uma nova chave/valor ao meu objeto:

pessoa.altura = 1.69;
console.log(pessoa);

// Removendo uma chave/valor do meu objeto:
delete pessoa.nome;
console.log(pessoa);