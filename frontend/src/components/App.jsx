import { useState } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [workouts, setWorkouts] = useState(null);
  async function getData() {
    let res = await fetch("http://localhost:8080/api/wod");
    let data = await res.json();
    return data;
  }

  async function handleClick() {
    let data = await getData();
    setWorkouts(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        {workouts && <Display workouts={workouts} />}
        <button type="button" onClick={() => handleClick()}>
          Next WOD
        </button>
      </header>
    </div>
  );
}

export default App;
