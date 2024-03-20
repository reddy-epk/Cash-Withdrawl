import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Pavan kalyan'
    const intial = name.slice(0, 1)
    return (
      <div className="back">
        <div className="inner-container">
          <div className="first">
            <div className="logo-container">
              <p className="logo">{intial}</p>
            </div>
            <p className="logoName">{name}</p>
          </div>
          <div className="second">
            <p className="Head">Your Balance</p>
            <div className="turn">
              <p className="rupee">{balance}</p> <br />{' '}
              <span className="rupees">In Rupees</span>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">Choose SUM (IN Rupees)</p>
          <ul className="ul-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
