import React, { useState } from 'react'
import '../assets/scss/main.scss'
import emojijsonimport from '../documents/emoji.json'

function emojipasta() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const emojijson = emojijsonimport
  function nestedFunction(text){
    var inputShit = text;
    inputShit = inputShit.toLowerCase()
    var textArray = inputShit.toString().split(' ')
    var finalString = ''

    for (var i = 0; i < textArray.length; i++) {
      finalString += '' + textArray[i] + ' '
      if (emojijson.hasOwnProperty(textArray[i])) {
        finalString += emojijson[textArray[i]]
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
          onChange={e => {setInputText(e.target.value); setOutputText(nestedFunction(e.target.value))}}
        ></input>
      <h2>Conversion: </h2>
      <input type ="text" value={outputText} readOnly></input>
    </div>
  )
}

export default emojipasta
