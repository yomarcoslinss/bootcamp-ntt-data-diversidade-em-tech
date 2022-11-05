"use strict";
// Classes
class Character {
    constructor(strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// Character: superclass / classe pai
// Magician: subclass / classe filha
class Magician extends Character {
    constructor(strength, skill, magicPoints) {
        super(strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character(10, 98);
const p2 = new Magician(10, 10, 10);
p1.attack();
p2.attack();
