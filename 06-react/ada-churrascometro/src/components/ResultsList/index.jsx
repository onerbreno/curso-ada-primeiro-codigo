import PropTypes from 'prop-types'
import './styles.css'
import { ProductCard } from './ProductCard'

export function ResultsList({ results }) {
  return (

    <ul className='products-list-container'>
        {
          results.map((product) => {
            return (
              <ProductCard key={product.name} product={product} />
            )
          })
        }
    </ul>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
}