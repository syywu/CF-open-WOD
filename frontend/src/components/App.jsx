import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [workouts, setWorkouts] = useState(null);
  async function getData() {
    let res = await fetch("http://localhost:8000/api/wod");
    let data = await res.text();
    return data;
  }

  async function handleClick() {
    let data = await getData();
    setWorkouts(data);
  }

  // const {
  //   data: workouts,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/api/wod");

  return (
    <div className="App">
      <header className="App-header">
        {/* {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}
        {workouts && <Display workouts={workouts} />}
        <button type="button" onClick={() => handleClick()}>
          Next WOD
        </button>
      </header>
    </div>
  );

  // const [workout, setWorkout] = useState([{}]);

  // const handleGetData = useCallback(() => {
  //   fetch("http://localhost:8000/api/wod")
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setWorkout(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   handleGetData();
  // }, [handleGetData]);

  // return (
  //   <div>
  //     {workout && <div>{workout.data}</div>}
  //     <button onClick={() => handleGetData()}>Next WOD</button>
  //   </div>
  // );
}

export default App;
