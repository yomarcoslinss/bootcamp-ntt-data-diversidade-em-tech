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
* - Débito à vista: recebe 10% de desconto;
* - Dinheiro à vista (ou PIX): recebe 15% de desconto; 
* - Em duas vezes: preço normal de etíqueta sem juros;
* - Acima de duas vezes, preço normal de etiqueta + juros de 10%;
*
*/

let valorProduto = 100;
let pagamento = ' '

if (pagamento === 'debito') {
    var debito = valorProduto % 90
}

console.log(debito)
