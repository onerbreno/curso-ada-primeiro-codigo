const BASE_POKEMON_API = "https://pokeapi.co/api/v2"
const LIMIT_POKEMONS_PER_REQUEST = 20
let currentPage = 1

async function fetchPokemons(page) {
  const offset = (page - 1) * LIMIT_POKEMONS_PER_REQUEST

  const url = `${BASE_POKEMON_API}/pokemon/?offset=${offset}&limit=${LIMIT_POKEMONS_PER_REQUEST}`

  const apiResponse = await fetch(url)
  const pokemonData = await apiResponse.json()
  const pokemonListElement = document.querySelector('.pokemon-list')

  pokemonListElement.innerHTML = ''

  const pokemonItems = pokemonData.results.map(pokemon => {
    const pokemonListItem = document.createElement('li')
    pokemonListItem.innerHTML = pokemon.name

    return pokemonListItem
  })

  pokemonListElement.append(...pokemonItems)
}

async function setupPagination() {
  const apiResponse = await fetch(`${BASE_POKEMON_API}/pokemon/`)
  const data = await apiResponse.json()

  const totalPages = Math.ceil(data.count / LIMIT_POKEMONS_PER_REQUEST)

  const paginationListElement = document.querySelector('.pagination-list')

  paginationListElement.innerHTML = ''

  let startPage = Math.max(currentPage - 2, 1)

  let endPage = Math.min(startPage + 4, totalPages)

  if (endPage - startPage < 4) {
    startPage = Math.max(endPage - 4, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageListItem = document.createElement('li')
    pageListItem.innerHTML = i
    pageListItem.addEventListener('click', () => {
      currentPage = i
      fetchPokemons(currentPage)
      setupPagination()
    })

    paginationListElement.append(pageListItem)
  }

}

fetchPokemons(currentPage)
setupPagination()