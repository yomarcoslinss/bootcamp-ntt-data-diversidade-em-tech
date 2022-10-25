function escreverNome (nome) {
    console.log(`O Seu nome é ${nome}`);
}

escreverNome('Marcos');
escreverNome('Maiara');

function verificarMaioridade (idade) {
    if(idade >= 1 && idade <= 17) {
        console.log('Você é MENOR de idade !!');
    } else if (idade >= 18 && idade <= 120) {
        console.log('Você é maior de idade.');
    } else {
        console.log('ERRO !!!! Insira uma idade válida.');
    }
}

verificarMaioridade(133);