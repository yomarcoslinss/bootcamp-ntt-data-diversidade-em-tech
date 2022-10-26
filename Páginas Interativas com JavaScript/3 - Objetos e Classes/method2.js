/* No objeto abaixo, eu tenho o metodo "descrever" */
const pessoa = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

// Eu posso executar um método da mesma maneira que eu executo uma função:
pessoa.descrever();

// Eu posso substituir um método(função), da mesma maneira que eu posso substituir um par de chave/valor de um objeto:
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}
