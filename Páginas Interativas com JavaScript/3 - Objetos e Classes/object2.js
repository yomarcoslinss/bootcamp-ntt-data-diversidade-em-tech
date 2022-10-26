const pessoa = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
};


// Eu posso, através de uma string, acessar dinamicament um atributo
const atributo = 'nome';
console.log(pessoa[atributo]);

// Alterando um valor de forma dinâmica
pessoa['nome'] = 'Linss';
console.log(pessoa[atributo]);
