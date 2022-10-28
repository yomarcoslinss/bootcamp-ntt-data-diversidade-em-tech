const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (i = 0 ; i < notas.length ; i++) {
    const nota = notas[i]
    soma = soma + nota;
}
// Enquanto "i" for menor que notas.length(6), será retornado o valor de cada índice, e cada valor será armazenado e somado na variável "soma".
const media = soma / notas.length
console.log(media)