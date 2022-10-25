/*
*
*   ========== DESAFIO CONDIÇÃO DE PAGAMENTO ==========
*
* 3 ) Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal de
* etiqueta e a escolha da condição de pagamento.
*
* Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado
*
* Código Condição de Pagamento:
* 
* 1 - Débito à vista: recebe 10% de desconto;
* 2 - Dinheiro à vista (ou PIX): recebe 15% de desconto; 
* 3 - Em duas vezes: preço normal de etíqueta sem juros;
* 4 - Acima de duas vezes, preço normal de etiqueta + juros de 10%;
*
*/

let precoProduto = 100
const formaPagamento = 1



if (formaPagamento == '1') {
   debito = precoProduto / 100 * 90
   console.log(`Você irá pagar R$ ${debito}`)
} else if (formaPagamento == '2') {
    dinheiro = precoProduto / 100 * 85
    console.log(`Você irá pagar R$ ${dinheiro}`)
} else if (formaPagamento == '3') {
    duasVezes = precoProduto
    console.log(`Você irá pagar R$ ${duasVezes}`)
} else if (formaPagamento == '4') {
    parcelado = precoProduto + (precoProduto * 0.10)
    console.log(`Você irá pagar R$ ${parcelado}`)
} else {
    console.log('ERRO !!! Informe uma forma de pagamento valida. ( Débito à vista = 1 | Dinheiro ou PIX = 2 | Duas vezes no crédito = 3 | Acima de 2 vezes = 4 )')
}