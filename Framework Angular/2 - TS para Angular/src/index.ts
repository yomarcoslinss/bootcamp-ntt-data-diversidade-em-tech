// Interfaces (type x interface)
// type normalmente é usado para tipar variáveis e objetos
// enquanto interface é usada para tipar classe
type robot = {
    id:number|string; //
    name:string;
}

interface robot2 {
    readonly id:number|string;
    name:string;
    sayHello():string;
}

const bot1:robot = {
    id: "1",
    name: "Megaman",
}

const bot2:robot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}


class Pessoa implements robot2{
    id: string | number;
    name: string;
    
    constructor(id: string | number, name:string) {
        this.id = id
        this.name = name
    }
    sayHello(): string {
       return `Hello, im ${this.name}`;
    }
}


const p = new Pessoa(1, "gutsman")
console.log(p.sayHello());