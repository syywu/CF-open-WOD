import { useState, useEffect } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [workouts, setWorkouts] = useState(null);
  const [isPending, setIsPending] = useState(true);

  async function getData() {
    let res = await fetch("http://localhost:8000/api/wod");
    let data = await res.json();
    return data;
  }

  async function handleClick() {
    let data = await getData();
    setWorkouts(data);
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        {isPending && <div>Loading...</div>}
        {workouts && <Display workouts={workouts} />}
        <button type="button" onClick={() => handleClick()}>
          Next WOD
        </button>
      </header>
    </div>
  );
}

export default App;
