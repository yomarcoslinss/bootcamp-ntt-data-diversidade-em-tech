const numero = 5
let numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log("O número é invalido");
} else if (numeroDivisivelPor5) {
    console.log("Sim");
} else {
    console.log("Não");
}


console.log("Outra resolução")

numeroDivisivelPor5 = 25;

if (numeroDivisivelPor5 === 0) {
    console.log("Número inválido !!")
} else if (numeroDivisivelPor5 % 5 === 0) {
    console.log (`O número ${numeroDivisivelPor5} é da tábuada do 5 :)`)
} else {
    console.log ("O número NAO é da tábuada do 5!")
}