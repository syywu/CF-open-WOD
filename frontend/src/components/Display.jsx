const Display = ({ workouts }) => {
  return (
    <div className="display">
      {workouts}
      {/* {workouts.map((workout) => (
        <div>
          <p>{workout.key}</p>
          <p>{workout.wod_id}</p>
          <p>{workout.name}</p>
          <p>{workout.time}</p>
          <p>{workout.rounds}</p>
          <p>{workout.wod}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Display;
