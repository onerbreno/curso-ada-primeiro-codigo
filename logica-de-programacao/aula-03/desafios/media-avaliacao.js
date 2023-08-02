const avaliacoes = {
  1: 2,
  2: 15,
  3: 18,
  4: 25,
  5: 40
}

const totalAvaliacoes = Object.values(avaliacoes).reduce((total, atual) => total += atual, 0)

// Solução com for
let mediaComFor = 0
for (const i in avaliacoes) {
  mediaComFor += (avaliacoes[i] * i) / totalAvaliacoes
}
console.log(`Com for in: ${mediaComFor.toFixed(2)}`)

// Solução com reduce
const mediaComReduce = Object.keys(avaliacoes).reduce((media, atual) => media += (avaliacoes[atual] * atual) / totalAvaliacoes, 0).toFixed(2)
console.log(`Com reduce: ${mediaComReduce}`)
