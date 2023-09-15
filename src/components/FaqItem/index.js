// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {details} = this.props
    const {answerText} = details
    const {isActive} = this.state
    if (isActive) {
      return <p>{answerText}</p>
    }
    return null
  }

  toggleImage = () => {
    // const {isActive} = this.state
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.toggleImage}>
        <img src={imgUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {details} = this.props
    const {questionText} = details

    return (
      <li className="list">
        <h1>{questionText}</h1>
        {this.renderActiveImage()}
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
