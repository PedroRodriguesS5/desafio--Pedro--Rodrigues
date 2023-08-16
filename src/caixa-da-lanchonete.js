class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0;

        const formasPagamento = ['debito', 'credito', 'dinheiro']

        const itensPrincipais = {
            'cafe': { price: 300 },
            'suco': { price: 620 },
            'sanduiche': { price: 650 },
            'salgado': { price: 725 },

        }
        const itensExtras = {
            'chantily': { price: 150 },
            'queijo': { price: 200 },
            'combo 1': { price: 950 },
            'combo 2': { price: 750 },

        }

        if (!formasPagamento.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        } else if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }
        let itensCarrinho = [];
        for (const item of itens) {
            const [codigoItem, quantidade] = item.split(',');
            itensCarrinho.push([codigoItem, parseInt(quantidade)]);

            console.log(itensCarrinho);
        }
        let valorItensPrincipais = 0;
        let valorItensExtras = 0;
        let contemPrincipal = false;
        for (const [codigoItem, quantidade] of itensCarrinho) {
            const validarPrincipal = itensPrincipais[codigoItem] !== undefined;
            const validarExtra = itensExtras[codigoItem] !== undefined;
            if (validarPrincipal) {
                contemPrincipal = true;
                valorItensPrincipais += itensPrincipais[codigoItem].price * parseInt(quantidade) / 100;
            } else if (validarExtra) {
                if (!contemPrincipal) {
                    return 'Item extra não pode ser pedido sem o principal';
                }
                valorItensExtras += itensExtras[codigoItem].price * parseInt(quantidade) / 100;
            } else {
                return 'Item inválido!'
            }
            if (quantidade <= 0) {
                return 'Quantidade inválida!';
            }
        }



        valorTotal = valorItensPrincipais + valorItensExtras;
        if (metodoDePagamento === 'dinheiro') {
            valorTotal -= valorTotal * 0.05;
        } else if (metodoDePagamento === 'credito') {
            valorTotal += valorTotal * 0.03;
        }
        valorTotal = 'R$ ' + valorTotal.toFixed(2);
        return valorTotal = String(valorTotal.replace('.', ','));
    }

}


export { CaixaDaLanchonete };

