// OUTRA MANEIRA DE RESOLVER O DESAFIO002 !!!!!

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
        const calculo = (this.peso / (Math.pow(this.altura, 2))).toFixed(2)
        const imc = calculo;
        if (imc < 18.5) {
            return `Olá, meu nome é ${this.nome}, meu IMC é ${imc} e ele é classificado como: 'Magreza'`
        } else if (imc >= 18.5 && imc < 25) {
            return `Olá, meu nome é ${this.nome}, meu IMC é ${imc} e ele é classificado como: 'Normal' `
        } else if (imc >= 25 && imc < 30) {
            return `Olá, meu nome é ${this.nome}, meu IMC é ${imc} e ele é classificado como: 'Sobrepeso' `
        } else if (imc >= 30 && imc < 40) {
            return `Olá, meu nome é ${this.nome}, meu IMC é ${imc} e ele é classificado como: 'Obesidade' `
        } else {
            return `Olá, meu nome é ${this.nome}, meu IMC é ${imc} e ele é classificado como: 'Obesidade Grave'`
        }
    }
}

const marcos = new Pessoa('Marcos', 70, 1.60);
console.log(marcos.calcularImc());

const maiara = new Pessoa('Maiara', 51, 1.65);
console.log(maiara.calcularImc());