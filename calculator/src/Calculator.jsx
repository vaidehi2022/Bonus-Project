import { useState } from 'react'

import './Calculator.css'

function Calculator() {

  const [result , setResult] = useState('')

  const handleClick = (event) => {
    setResult(result.concat(event.target.value))
  }

  const handleClear = () =>{
    setResult('')
  }

  const handleResult = ()=>{
    setResult(eval(result).toString())
  }

  return (
    <>
      <div className='cal'>
        <input type = 'text' placeholder = '0' value = {result} className = 'ans' />
        <input type = 'button' value = '9' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '8' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '7' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '6' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '5' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '4' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '3' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '2' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '1' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '0' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '.' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '+' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '-' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '*' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '%' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = '/' className = 'button' onClick = {handleClick} />
        <input type = 'button' value = 'Clear' className = 'button' onClick = {handleClear} />
        <input type = 'button' value = '=' className = 'button' onClick = {handleResult} />

      </div>
    </>
  )
}

export default Calculator
