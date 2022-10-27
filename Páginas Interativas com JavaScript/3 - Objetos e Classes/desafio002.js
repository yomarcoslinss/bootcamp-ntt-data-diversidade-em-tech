/*
*
* 2 - Crie uma classe para representar pessoas.
* Para cada pessoa, teremos os atributos: nome, peso e altura.
* As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
* Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer
* o valor de seu IMC.
*
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (Math.pow(this.altura, 2))).toFixed(2)
    }
    
    classificarImc() {
        if(this.calcularImc() < 18.5) {
            return 'Magreza'
        } else if (this.calcularImc() >= 18.5 && this.calcularImc() <= 24.9 ) {
            return 'Normal'
        } else if (this.calcularImc() >= 25 && this.calcularImc() <= 29.9) {
            return 'Sobrepeso'
        } else if (this.calcularImc() >= 30 && this.calcularImc() <= 39.9) {
            return `Obesidade`
        } else {
            return `Obesidade grave`
        }
        
    }

    dizerImc() {
        return `Olá, meu nome é ${this.nome}, meu IMC é: ${this.calcularImc()}, e ele é classificado como: ${this.classificarImc()}.`;
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.dizerImc());

const marcos = new Pessoa('Marcos', 95, 1.80);
console.log(marcos.dizerImc());