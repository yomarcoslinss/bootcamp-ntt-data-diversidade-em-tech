/*
*
* Uma função dentro de um objeto, é chamada de "Método"
* Ao declarar um método, eu não preciso escrever 'function'
*
*/




/*
* Para mim usar um par de chave/valor do meu objeto no meu método, eu posso usar a função "this"
* que faz referência ao objeto que está chamando a função no momento.
* Em outras palavras, como essa função está dentro de um objeto, o "this" assume esse objeto.
*/

/* No objeto abaixo, eu tenho o metodo "descrever" */
const pessoa = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

/* Eu posso executar um método da mesma maneira que eu executo uma função: */
pessoa.descrever();
