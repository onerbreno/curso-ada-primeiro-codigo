import { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export function QuantifyPeopleCard({ category, title, onChangePeople }) {
  const [quantify, setQuantify] = useState(0);

  const handleIncrement = () => {

    const quantifyPeople = quantify + 1

    setQuantify(quantifyPeople)
    onChangePeople(quantifyPeople, category)
  }

  const handleDecrement = () => {
    if (quantify > 0) {
      const quantifyPeople = quantify - 1

      setQuantify(quantifyPeople)
      onChangePeople(quantifyPeople, category)
    }
  }

  const handleInputChange = (event) => {
    const quantifyPeople = Number(event.target.value)
    console.log(quantifyPeople)

    setQuantify(quantifyPeople)
    onChangePeople(quantifyPeople, category)
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
  onChangePeople: PropTypes.func.isRequired
}