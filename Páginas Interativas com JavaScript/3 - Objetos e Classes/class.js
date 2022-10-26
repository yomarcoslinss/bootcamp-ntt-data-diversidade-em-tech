/*
*
* Uma classe, é uma definição do que deveria ser.
*
* Diferença entre classe e objeto:
* • Os objetos podem ser categorizados, agrupados, e uma classe descreve todos os objetos de um tipo particular;
* • A classe é um modelo/template, enquanto o objeto é o modelo personalizado com valores ou estado.
*
*/


// Caso eu queira criar uma outra pessoa como nesse objeto abaixo, eu precisaria repetir TODO o código...
const marcos = {
    nome: 'Marcos Linss',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
console.log(marcos)

// Eu posso dinamizar isso criando uma classe (no lugar de valores especificos, eu crio um "template" em geral para todas as pessoas), facilitando todo o processo.
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
}
// A responsabilidade dessa classe é definir como são Pessoas, para que elas possam ser estanciadas.
// Ao declarar um método, eu não preciso digitar "function".



// Para mim estanciar uma pessoa nova: 
const maiara = new Pessoa();
console.log(maiara) // Os valores serão: undefined, pois eu não atribui nenhum valor;

maiara.nome = 'Maiara Martins dos Santos';
maiara.idade = 28;
console.log(maiara)

maiara.descrever();