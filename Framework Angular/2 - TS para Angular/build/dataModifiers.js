"use strict";
/*
*
*   Data Modifiers:
*  • Public : Pode ser acessado dentro e fora da classe
*  * Private : Só pode ser acessado por dentro da classe
*  * Protected : Só pode ser acessado por dentro da classe ou apartir das sub-classes
*
*/
class Personagem {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        console.log(`O nome do personagem é ${this.nome} ${this.sobrenome}`);
    }
}
const personagem = new Personagem("Zoro", "Roronoa");
personagem.nomeCompleto();
console.log(personagem.nome); // não irá funcionar pois está definido como privado, então só pode ser acessado de dentro da classe.
console.log(personagem.sobrenome);
