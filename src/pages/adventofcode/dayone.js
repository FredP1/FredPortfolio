import React, { useState } from 'react'
import  '../../assets/scss/main.scss'

function adventdayone() {
  const [inputNo, setInputNo] = useState(0)
  const [outputNo, setOutputNo] = useState(0)
  const [inputNo2, setInputNo2] = useState(0)
  const [outputNo2, setOutputNo2] = useState(0)
  var count = 0
  var count2 = 0
  function fuelArray(number) {
    var inputshit = number
    inputshit = inputshit / 3
    inputshit = Math.floor(inputshit)
    inputshit = inputshit - 2
    count = count + inputshit
  }
  function fuel(inputnumba) {
    count = 0
    var inputArray = inputnumba.split(' ')
    inputArray.forEach(fuelArray)
    return count
  }
  function fuelArray2(number) {
    var inputshit = number
    inputshit = inputshit / 3
    inputshit = Math.floor(inputshit)
    inputshit = inputshit - 2
    if (inputshit > 0)
    {
        count2 += inputshit
    }
    inputshit = inputshit / 3
    inputshit = Math.floor(inputshit)
    inputshit = inputshit - 2
    if (inputshit > 0)
    {
        count2 += inputshit
        fuelArray2(inputshit)
    }
  }
  function fuel2(inputnumba) {
    count2 = 0
    var inputArray = inputnumba.split(' ')
    inputArray.forEach(fuelArray2)
    return count2
  }
  return (
    <div>
      <h1>Day 1</h1>
      <h2>Part 1</h2>
      <input
        type="text"
        value={inputNo}
        onChange={e => {
          setInputNo(e.target.value)
          setOutputNo(fuel(e.target.value))
        }}
      ></input>
      <h2>Output: </h2>
      <input type="text" value={outputNo} readOnly></input>
      <h2>Part 2</h2>
      <input
        type="text"
        value={inputNo2}
        onChange={e => {
          setInputNo2(e.target.value)
          setOutputNo2(fuel2(e.target.value))
        }}
      ></input>
        <h2>Output: </h2>
      <input type="text" value={outputNo2} readOnly></input>
    </div>
  )
}
export default adventdayone
