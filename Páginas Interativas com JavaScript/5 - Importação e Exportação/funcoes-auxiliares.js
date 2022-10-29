// Abaixo estão as minhas 2 funções auxiliares:
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

// Para mim exportar funções e objetos, eu uso:
module.exports = {gets, print};
// module é um objeto, na linha de código acima, eu estou declarando ele como um objeto literal

/* Outra maneira de exportar:*/
// module.exports.gets = gets;
// module.exports.gets = print;