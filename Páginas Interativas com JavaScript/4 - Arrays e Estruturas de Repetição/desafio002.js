// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const lista = [10, 263, 80, 466, 423, 302 , 455 , 216 , 123, 46];

for(i = 0 ; i < lista.length ; i++) {
    let numPar = (lista[i])
    if (numPar % 2 === 0) {
        console.log (numPar)
    }
}