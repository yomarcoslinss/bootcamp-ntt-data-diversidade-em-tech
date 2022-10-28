// A minha array pode ser iniciada vazia, e os valores podem ser adicionados ao decorrer do código;
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(10);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];

console.log((soma / notas.length).toFixed(2)); // O método .length que me retorna a quantia de índices que eu tenho na minha array, também pode ser calculado!
// O calculo acima irá somar todas as notas, e dividir pela quantia de índices que eu tenho na minha array (que nesse caso, são 6).