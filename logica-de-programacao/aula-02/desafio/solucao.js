const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

// const produtos = reciboDeVenda.split(';').filter(Boolean)
const venda = reciboDeVenda.split(';')
// produtos.pop()
venda.splice(venda.length - 1, 1)
const quantidadeProdutos = {}

const listaProdutos = venda.map(produto => {
  const [nomeProduto, valorComCupom] = produto.split('/')

  const removerLetras = item => Number(item.slice(5))
  const [valorProduto, cupom] = valorComCupom.split('=').map(removerLetras)

  quantidadeProdutos[nomeProduto] ? quantidadeProdutos[nomeProduto] += 1 : quantidadeProdutos[nomeProduto] = 1

  return {
    produto: nomeProduto[0].toUpperCase() + nomeProduto.slice(1),
    valor: valorProduto,
    cupom
  }
})

const listaDaVenda = listaProdutos.map(item => {
  return {
    ...item,
    quantidade: quantidadeProdutos[item.produto]
  }
})
console.log(listaDaVenda)