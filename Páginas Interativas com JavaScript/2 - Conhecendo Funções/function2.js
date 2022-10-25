function calcularImc(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        resultado = ('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25) {
        resultado = ('Peso normal')
    } else if (imc >= 25 && imc < 30) {
        resultado = ('Acima do peso')
    } else if (imc >= 30 && imc < 40) {
        resultado = ('Obeso')
    } else {
        resultado = ('Obesidade grave')
    }
    return (`Seu IMC  consta como ${imc} - ${resultado}`)
}


/* Função anonima */
(function () {
    const peso = 75
    const altura = 1.75

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))

})();
/* ACIMA ESTÁ UMA "FUNÇÃO IMEDIATAMENTE INVOCADA" */
/* Bastante usado em websites */


