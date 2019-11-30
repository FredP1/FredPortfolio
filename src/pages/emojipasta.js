import React, { useState } from 'react'
import '../assets/scss/main.scss'

function emojipasta() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  function nestedFunction(){
    var inputShit = inputText;
    inputShit = inputShit.toLowerCase()
    var textArray = inputShit.toString().split(' ')
    var emojiDict = { happy: ['😃 '], penis: ['🍆 '], funny: ['😂 '], wet: ['💦 '] }
    var finalString = ''

    for (var i = 0; i < textArray.length; i++) {
      finalString += '' + textArray[i] + ' '
      if (emojiDict.hasOwnProperty(textArray[i])) {
        finalString += emojiDict[textArray[i]]
      }
    }
    //setOutputText(finalString)
    return finalString; 
  }
  return (
    <div>
      <h1>Emoji Pasta Generator</h1>
        <input
          type="text"
          value={inputText}
          onChange={e => {setInputText(e.target.value); setOutputText(nestedFunction())}}
        ></input>
      <h2>Conversion: </h2>
      <input type ="text" value={outputText} readOnly></input>
    </div>
  )
}

export default emojipasta
