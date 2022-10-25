
function desconto (precoProduto, formaPagamento) {
    if(formaPagamento == 1) {
        debito = precoProduto / 100 * 90
        return (`O valor do produto é R$${precoProduto}, com essa forma de pagamento, você recebeu um desconto e irá pagar R$${debito}`)
    } else if (formaPagamento == 2) {
        dinheiro = precoProduto / 100 * 85
        return (`O valor do produto é R$${precoProduto}, com essa forma de pagamento, você recebeu um desconto e irá pagar R$${dinheiro}`)
    } else if (formaPagamento == 3) {
        duasVezes = precoProduto
        return (`Com essa forma de pagamento, você irá pagar o valor de etiqueta desse produto R$ ${duasVezes}`)
    } else if (formaPagamento == 4) {
        parcelado = precoProduto + (precoProduto / 100 * 10)
        return(`Com essa forma de pagamento, você irá pagar o preço do produto R$ ${precoProduto} com um pequeno acréscimo de 10%, totalizando R$ ${parcelado}`)
    } else {
        return (`Insira uma forma de pagamento válida !!!`)
    }
}

console.log(desconto(100, 4))
