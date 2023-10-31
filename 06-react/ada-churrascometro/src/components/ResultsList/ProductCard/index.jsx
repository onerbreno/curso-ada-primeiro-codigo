import PropType from 'prop-types'
import './styles.css'

export function ProductCard({ product }) {
  return (
    <li className='product-item'>
      <div className='product-header'>
        <div className='product-image-container'>
          <img src={product.previewURL} alt="" />
        </div>
        <h3>{product.name}</h3>
      </div>

      <div className='product-quantify-badge'>{product.quantify} {product.unit}</div>
    </li>
  )
}

ProductCard.propTypes = {
  product: PropType.object.isRequired,
}