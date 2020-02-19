import React, { useState } from 'react'
import '../../assets/scss/main.scss'

function adventdaytwo() {
  const [inputValues, setInputValues] = useState(0)
  const [outputValues, setOutputValues] = useState(0)
  const [inputValues2, setInputValues2] = useState(0)
  const [outputValues2, setOutputValues2] = useState(0)
  function daytwo(array) {
    var output = array
    output = output.split(',')
    for (var i = 0; i < output.length; i += 4) {
      if (parseInt(output[i]) == '1') {
        var a = output[output[i + 1]]
        var b = output[output[i + 2]]
        var c = output[output[i + 3]]
        var d = parseInt(a) + parseInt(b)
        output[output[i + 3]] = d
      } else if (parseInt(output[i]) == 2) {
        var a = output[output[i + 1]]
        var b = output[output[i + 2]]
        var c = output[output[i + 3]]
        var d = parseInt(a) * parseInt(b)
        output[output[i + 3]] = d
      } else if (parseInt(output[i]) == 99) {
        break
      }
    }

    return output[0]
  }
  function daytwo2(array) {
    var output = array
    output = output.split(',')
    for (var t = 0; t < 100; t++) {
      output[1] = t
      for (var j = 0; j < 100; j++) {
          output[2] = j
        for (var i = 0; i < output.length; i += 4) {
          if (parseInt(output[i]) == '1') {
            var a = output[output[i + 1]]
            var b = output[output[i + 2]]
            var c = output[output[i + 3]]
            var d = parseInt(a) + parseInt(b)
            output[output[i + 3]] = d
          } else if (parseInt(output[i]) == 2) {
            var a = output[output[i + 1]]
            var b = output[output[i + 2]]
            var c = output[output[i + 3]]
            var d = parseInt(a) * parseInt(b)
            output[output[i + 3]] = d
          } else if (parseInt(output[i]) == 99) {
              if (parseInt(output[0]) == 19690720){
                  return 'Noun = ' + j + ', Verb = ' + t
              }
            break
          }
        }
      }
    }

    return output[0]
  }
  return (
    <div>
      <h1>Day 2</h1>
      <h2>Part 1</h2>
      <input
        type="text"
        value={inputValues}
        onChange={e => {
          setInputValues(e.target.value)
          setOutputValues(daytwo(e.target.value))
        }}
      ></input>
      <h2>Output: </h2>
      <input type="text" value={outputValues} readOnly></input>
      <h2>Part 2</h2>
      <input
        type="text"
        value={inputValues2}
        onChange={e => {
          setInputValues2(e.target.value)
          setOutputValues2(daytwo2(e.target.value))
        }}
      ></input>
      <h2>Output: </h2>
      <input type="text" value={outputValues2} readOnly></input>
    </div>
  )
}
export default adventdaytwo
