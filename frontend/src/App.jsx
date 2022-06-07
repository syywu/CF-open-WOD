import { useState } from 'react'
import './App.css'

async function getData(){
  let res = await fetch('http://localhost:8000/api/wod')
  let data = await res.text()
  return data
}

async function handleClick(){
  let data = await getData()
  console.log(data)
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          <button type="button" onClick={() => handleClick()}>
            Next WOD
          </button>
      </header>
    </div>
  )
}

export default App
