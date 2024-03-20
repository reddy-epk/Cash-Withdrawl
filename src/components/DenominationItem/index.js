import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="li-container">
      <button
        type="button"
        className="button-style"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
