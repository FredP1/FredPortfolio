import React, { useState } from 'react'
import '../../assets/scss/main.scss'

function adventdaytwo() {
  const [inputValues, setInputValues] = useState(0)
  const [outputValues, setOutputValues] = useState(0)
  function daytwo(array) {
    var output = array;
    output = output.split(',')
    for (var i = 0; i < output.length; i+=4){
        if (parseInt(output[i]) == '1')
        {
            var a = output[output[i+1]]
            var b = output[output[i+2]]
            var c = output[output[i+3]]
            var d = parseInt(a) + parseInt(b);
            output[output[i+3]] = d;
        }
        else if (parseInt(output[i]) == 2)
        {
            var a = output[output[i+1]]
            var b = output[output[i+2]]
            var c = output[output[i+3]]
            var d = parseInt(a) * parseInt(b);
            output[output[i+3]] = d;
        }
        else if (parseInt(output[i]) == 99)
        {
            break;
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
    </div>
  )
}
export default adventdaytwo
