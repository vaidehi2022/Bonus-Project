import Calendar from 'react-calendar'
import './App.css'
import { useState } from 'react'

function Calendar_() {
  
const [value , setValue] = useState(new Date())

const formatDate = (date) =>{
  const options = {year : 'numeric' , month : 'long' , day : 'numeric'}
  return date.toLocaleDateString('en-Us' , options)
}

  return (
    <>
      <h1>Calendar </h1>
      <Calendar 
        value={value}
        onChange={setValue}
        className='main'
      />
      <h1>Selected Date : {formatDate(value)} </h1>
    </>
  )
}

export default Calendar_
