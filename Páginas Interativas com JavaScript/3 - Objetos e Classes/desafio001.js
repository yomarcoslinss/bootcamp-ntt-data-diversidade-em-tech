/* 
*
* 1 - Crie uma classe para representar carros.
* Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
* Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto
* em reais para realizar esse percurso.
*
*/


class Carro {
    marca;
    cor;
    litroPorKm;

    constructor(marca, cor, litroPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litroPorKm = litroPorKm;
    }

    calcularValor(distanciaViagem, valorCombustivel){
        return ((distanciaViagem / this.litroPorKm) * valorCombustivel).toFixed(2) 
    }
}

const mobi = new Carro('Fiat', 'Vermelho', 12);
console.log(mobi.calcularValor(70, 5));

const palio = new Carro('Fiat', 'Preto', 10);
console.log(palio.calcularValor(70, 5))