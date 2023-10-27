import { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export function QuantifyPeopleCard({ category, title }) {
  const [quantify, setQuantify] = useState(0);

  const handleIncrement = () => {
    setQuantify(quantify + 1)
  }

  const handleDecrement = () => {
    if (quantify > 0) {
      setQuantify(quantify - 1)
    }
  }

  const handleInputChange = (event) => {
    setQuantify(Number(event.target.value))
  }

  return (
    <div className="input-group">
      <label htmlFor={category}>{title}</label>
      <input type="number" id={category} value={quantify} onChange={handleInputChange} className="input-valid" />
      <div className="button-group">
        <button className="input-group__button--small" onClick={handleDecrement}>-</button>
        <button className="input-group__button--small" onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

QuantifyPeopleCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}