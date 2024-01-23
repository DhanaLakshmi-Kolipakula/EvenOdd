// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0, check: 'Even'}

  onIncrement = () => {
    const val = Math.ceil(Math.random() * 100)
    const res = val % 2 === 0 ? 'Even' : 'Odd'
    this.setState(e => ({value: e.value + val, check: res}))
  }

  render() {
    const {value, check} = this.state
    return (
      <div className="bg-background">
        <h1 className="main-heading">Count {value}</h1>
        <p className="sub-heading">Count is {check}</p>
        <button
          type="button"
          className="increment-button"
          onClick={this.onIncrement}
        >
          Increment
        </button>
        <p className="para">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
