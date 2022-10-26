// No objeto abaixo, eu tenho o metodo "descrever"
const pessoa = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

// Eu posso executar um método da mesma maneira que eu executo uma função:
pessoa.descrever();



// Eu posso acessar os valores de forma dinâmica:
const atributo = 'nome';
const atributo2 = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa[atributo2]);


// As duas linhas de código abaixo, tem a mesma função: alterar um valor de um atributo:

// Alterando um valor de uma forma dinâmica:
pessoa['nome'] = 'teste';
// Alterando um valor de uma forma direta:
pessoa.nome = 'teste'

