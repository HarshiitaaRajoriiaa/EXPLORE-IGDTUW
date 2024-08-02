import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import Header  from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>OUR FACULTY MEMBERS:</h1>
      <Card name="Harshita" about="lorem ipsum" link = "www.google.com"/>
      

    </>
  )
}
export default App
