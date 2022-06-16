import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [isPending, setisPending] = useState(true)

  useEffect(()=>{
    async function getData(){
      let res = await fetch('http://localhost:8000/api/wod')
      let data = await res.text()
      return data
    }
    getData()
  })
   
  async function handleClick(){
    let data = await getData()
    console.log(data)
  }


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
