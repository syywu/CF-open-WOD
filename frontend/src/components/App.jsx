import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Display from "./Display";
import useFetch from "./useFetch";

function App() {
  // async function getData() {
  //   let res = await fetch("http://localhost:8000/api/wod");
  //   let data = await res.json();
  //   return data;
  // }

  // async function handleClick() {
  //   let data = await getData();
  //   setWorkouts(data);
  //   setIsPending(false);
  // }

  const {
    data: workouts,
    isPending,
    error,
  } = useFetch("http://localhost:8000/api/wod");

  return (
    <div className="App">
      <header className="App-header">
        {error && <div>{error}</div>}
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
