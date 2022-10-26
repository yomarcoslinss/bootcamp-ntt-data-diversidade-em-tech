/*
*
* Uma classe, é uma definição do que deveria ser
* Classe: A definição de um carro é: ele tem uma cor e um ano
* Instancia: Um carro branco de 2017 é uma INSTANCIA de um carro
*/



class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
}

const marcos = new Pessoa();
marcos.nome = 'Marcos Vinicius Barbosa dos Santos';
marcos.idade = 19;


const maiara = new Pessoa();
maiara.nome = 'Maiara Martins dos Santos'
maiara.idade = 28;

console.log(marcos)
console.log(maiara)

marcos.descrever();
maiara.descrever();