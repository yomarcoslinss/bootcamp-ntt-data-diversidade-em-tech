"use strict";
const bot1 = {
    id: "1",
    name: "Megaman",
};
const bot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, im ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
