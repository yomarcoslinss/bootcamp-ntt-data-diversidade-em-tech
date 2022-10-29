/*
*
* Para importar as minhas funções auxiliares, criadas em outro script, no meu código principal, eu uso:
* Obs: quando eu uso a função require do nodejs, eu estou IMPORTANDO funções e objetos de terceiros, mas 
* obrigatoriamente essas funções/objetos precisam estar sendo EXPORTADAS também ! 
*
*/ 

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes); // irá me retornar um objeto com os métodos "gets" e "print";
console.log(funcoes.gets()); // Irá me retornar o valor 10, que foi definido no script funcoes-auxiliares.js;