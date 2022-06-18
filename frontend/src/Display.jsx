const Display = ({ workouts }) => {
  return (
    <div className="display">
      {workouts.map((workout) => (
        <div>
          <p>{workout.wod_id}</p>
          <p>{workout.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
