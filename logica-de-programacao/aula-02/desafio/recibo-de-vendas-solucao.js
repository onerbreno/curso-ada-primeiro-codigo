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

const totalComDesconto = listaDaVenda.reduce((total, produto) => {
  return total += (produto.valor * produto.quantidade) - (produto.valor * ((produto.cupom / 100) * produto.quantidade))
}, 0)

console.log(listaDaVenda)

console.log(totalComDesconto)
