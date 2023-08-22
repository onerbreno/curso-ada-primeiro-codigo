const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

// https://www.linkedin.com/pulse/learn-boolean-trick-when-using-javscripts-filter-array-devontae-moore/
const venda = reciboDeVenda.split(';').filter(Boolean)

const listaProdutos = venda.reduce((lista, produto) => {
  const [nomeProduto, valorComCupom] = produto.split('/')
  const [valorProduto, cupom] = valorComCupom.split('=').map(item => Number(item.slice(5)))

  if (!lista[nomeProduto]) {
    lista[nomeProduto] = {
      produto: nomeProduto[0].toUpperCase() + nomeProduto.slice(1),
      valor: valorProduto,
      cupom,
      quantidade: 0,
    };
  }

  lista[nomeProduto].quantidade++

  return lista
}, {})

const listaDaVenda = Object.values(listaProdutos)

const totais = {
  valorTotal: 0,
  valorTotalDesconto: 0,
  quantidadeDeProdutos: 0,
}

const valorTotalDesconto = listaDaVenda.reduce((totais, produto) => {
  totais.valorTotal += produto.valor * produto.quantidade

  totais.valorTotalDesconto += (produto.valor * produto.quantidade) - (produto.valor * produto.quantidade * (produto.cupom / 100))

  totais.quantidadeDeProdutos += produto.quantidade

  return totais
}, totais)
console.log(listaDaVenda)

console.log(valorTotalDesconto)
