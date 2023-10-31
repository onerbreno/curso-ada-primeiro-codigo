import PropTypes from 'prop-types'

import './styles.css'

export function QuantifyPeopleCard(props) {
  const handleIncrement = () => {
    const newQuantify = props.quantify + 1
    props.onChangePeople(newQuantify, props.category)
  }

  const handleDecrement = () => {
    if (props.quantify > 0) {
      const newQuantify = props.quantify - 1
      props.onChangePeople(newQuantify, props.category)
    }
  }

  const handleInputChange = (event) => {
    const quantifyPeople = Number(event.target.value)
    props.onChangePeople(quantifyPeople, props.category)
  }

  return (
    <div className="input-group">
      <label htmlFor={props.category}>{props.label}</label>
      <div className='button-group'>
        <button className="input-group__button--small" onClick={handleDecrement}>-</button>
        <input type="number" id={props.category} value={props.quantify} onChange={handleInputChange} className="input-valid" />
        <button className="input-group__button--small" onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

QuantifyPeopleCard.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  quantify: PropTypes.number.isRequired,
  onChangePeople: PropTypes.func.isRequired,
}