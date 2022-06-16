import { useState, useEffect } from 'react'
import './App.css'
import Display from './Display'

function App() {

    const [isPending, setisPending] = useState(true)
    const [workouts, setWorkouts] = useState(null)
    

    async function getData(){
      let res = await fetch('http://localhost:8000/api/wod')
      let data = await res.json()
      return data.payload
    }
   
  async function handleClick(){
    let data = await getData()
    setWorkouts(data)
    console.log(data)
  }


  return (
    <div className="App">
      <header className="App-header">
     <Display workout={workouts}/>
          <button type="button" onClick={() => handleClick()}>
            Next WOD
          </button>
      </header>
    </div>
  )
}

export default App
