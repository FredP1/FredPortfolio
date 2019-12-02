import React from 'react'
import '../assets/scss/main.scss'
import {Link} from 'gatsby'

function adventofcode() {
  return (
    <div>
      <h1>Advent of Code</h1>
      <Link to="/adventofcode/dayone"><button>Day 1</button></Link>
    </div>
  )
}
export default adventofcode
