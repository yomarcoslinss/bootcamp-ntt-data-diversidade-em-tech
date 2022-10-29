// Abaixo estão as minhas funções auxiliares:

const entradas = [5, 50, 10, 98, 23]
let i = 0 

function gets() {
    const valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto) {
    console.log(texto);
}

;

// Para mim exportar funções e objetos, eu uso:
module.exports = {gets, print};
// module é um objeto, na linha de código acima, eu estou declarando ele como um objeto literal

/* Outra maneira de exportar:*/
// module.exports.gets = gets;
// module.exports.gets = print;