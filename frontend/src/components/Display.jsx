const Display = ({ workouts }) => {
  return (
    <div className="display">
      {workouts.map((workout) => (
        <div key={workout.wod_id}>
          <p>{workout.name.toUpperCase()}</p>
          <p>Time: {workout.time}</p>
          <p>Rounds: {workout.rounds}</p>
          <p>{workout.wod}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
