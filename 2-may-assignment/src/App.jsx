import {useState} from 'react'
import Select from 'react-select'
import './App.css'

function App() {
 
  const options = [
    {label: 'Mango', value: 'opt1'},
    {label: 'Banana', value: 'opt'},
    {label: 'Apple', value: 'opt3'},
    {label: 'Grapes', value: 'opt4'},
    {label: 'Blueberry', value: 'opt5'},
    {label: 'Kiwi', value: 'opt6'},
    {label: 'Cherry', value: 'opt7'},
    {label: 'Strawberry', value: 'opt8'},
    {label: 'Lime', value: 'opt9'},
    {label: 'Lemon', value: 'opt10'},
    {label: 'Grapefruit', value: 'opt11'},
    {label: 'Watermelon', value: 'opt12'},
    {label: 'Pineapple', value: 'opt13'},
  ]
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <Select 
        options = {options}
        value = {selectedOption}
        onChange = {setSelectedOption}
        className = 'style'
        />
    </>
  )
}

export default App
