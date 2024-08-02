import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>OUR FACULTY MEMBERS:</h1>
      <Card name="Harshita" about="lorem ipsum" link = "www.google.com"/>
    </>
  )
}
export default App
