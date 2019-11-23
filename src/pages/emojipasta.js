import React, { Component } from 'react'
import Header from '../components/Header'
import '../assets/scss/main.scss'

class emojipasta extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.myRef = React.createRef()
    this.state = {conversion: ''}
  }
  componentDidMount() {
    {
      //this.emojiPasta()
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    var returnValue = this.emojiPasta(this.state.value)
    this.setState({ conversion: returnValue})
    event.preventDefault()
  }
  emojiPasta(text) {
    text = text + ''
    text = text.toLowerCase()
    var textArray = text.toString().split(' ')
    var emojiDict = { happy: ['😃'], penis: ['🍆'] }
    var finalString = ''

    for (var i = 0; i < textArray.length; i++) {
      finalString += '' + textArray[i] + ' '
      if (emojiDict.hasOwnProperty(textArray[i])) {
        finalString += emojiDict[textArray[i]]
      }
    }
    return finalString;
    window.alert(finalString)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter Text:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            ref = {this.myRef}
          ></input>
          <input type="submit" name="submit"></input>
        </form>
        <p ref={this.myRef}>Conversion: {this.state.conversion}</p>
      </div>
    )
  }
}

export default emojipasta
