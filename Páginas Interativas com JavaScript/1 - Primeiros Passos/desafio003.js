/*
*   ========== DESAFIO CALCULO DE MÉDIA ==========
*
*
* 1) Faça um algoritmo que dado as 3 notas tiraas por um aluno em um semestre da faculdade, calcule e imprima a sua média
* e a sua classificação conforme a tabela abaixo:
*
* Média = (nota 1 + nota 2 + nota 3) / 3;
*
* Classificação:
* - Média menor que 5, reprovação;
* - Média entre 5 e 7, recuperação;
* - Média acima de 7, passou de semestre;
*
*/

const aluno = 'Marcos';
let nota1 = 10
let nota2 = 10
let nota3 = 5
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 0 && media < 5) {
    console.log(`O aluno ${aluno} teve a média de ${media.toFixed(1)} e foi reprovado!`)
} else if (media >= 5 && media <= 7) {
    console.log(`O aluno ${aluno} teve a média de ${media.toFixed(1)} e ficou de recuperação!`)
} else if (media >=7 && media <= 10) {
    console.log(`O aluno ${aluno} teve a média de ${media.toFixed(1)} e foi APROVADO !! Parabéns.`)
} else {
    console.log('ERRO !!! Média invalida ! insira uma nota entre 0 a 10.')
}