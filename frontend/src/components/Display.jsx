const Display = ({ workouts }) => {
  return (
    <div className="display">
      {workouts.map((workout) => (
        <div key={workout.wod_id}>
          <p>{workout.name}</p>
          <p>time: {workout.time}</p>
          <p>rounds: {workout.rounds}</p>
          <p>{workout.wod}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
