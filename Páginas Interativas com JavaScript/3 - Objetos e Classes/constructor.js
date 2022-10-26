/* 
*
* O método especial constructor irá definir oque acontece quando uma "Pessoa" é instanciada
*
*/

class Pessoa {
    nome;
    idade;
    nascimento;

    constructor(nome, idade) { // Foram declarados somente o parâmetro "nome" e "idade".
        this.nome = nome;
        this.idade = idade;
        this.nascimento = `Você nasceu em ${2022 - idade}` // Irá ser exibido automaticamente, isso porque eu não declarei "nascimento" como parâmetro no construtor.
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
}

const marcos = new Pessoa('Marcos', 19);
console.log(marcos)