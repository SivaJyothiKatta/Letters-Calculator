// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeLetterCount = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div className="input-container">
            <label htmlFor="label">Enter the phrase</label>
            <br />
            <input
              id="label"
              className="input-text"
              type="text"
              onChange={this.onChangeLetterCount}
              placeholder="Enter the phrase"
            />
          </div>
          <p className="button" type="button">
            No.of letters: {count.length}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
