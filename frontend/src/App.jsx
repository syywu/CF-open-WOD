import { useState, useEffect } from 'react'
import './App.css'
import Display from './Display'

function App() {

    const [isPending, setisPending] = useState(true)
    const [workout, setWorkout] = useState(null)
    

    async function getData(){
      let res = await fetch('http://localhost:8000/api/wod')
      let data = await res.text()
      return data
    }
   
  async function handleClick(){
    let data = await getData()
    setWorkout(data)
    console.log(data)
  }


  return (
    <div className="App">
      <header className="App-header">
     <Display workout={workout}/>
          <button type="button" onClick={() => handleClick()}>
            Next WOD
          </button>
      </header>
    </div>
  )
}

export default App
