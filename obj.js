const workoutOfTheDay = [
  {
    name: "OPEN 21.3",
    time: "15 minutes",
    rounds: 3,
    wod: "15 Front Squats, 30 Toes-to-Bars, 15 Thrusters",
  },
  {
    name: "OPEN 21.4",
    time: "7 minutes",
    rounds: 1,
    wod: "1 Deadlift, 1 Clean, 1 Hang Clean, 1 Jerk",
  },
  {
    name: "OPEN 21.2",
    time: "20 minutes",
    rounds: 1,
    wod: "10 Dumbbell Snatches, 15 Burpee Box Jump Overs, 20 Dumbbell Snatches, 15 Burpee Box Jump Overs, 30 Dumbbell Snatches, 15 Burpee Box Jump Overs, 40 Dumbbell Snatches, 50 Dumbbell Snatches, 15 Burpee Box Jump Overs",
  },
  {
    name: "OPEN 21.1",
    time: "15 minutes",
    rounds: 1,
    wod: "1-3-6-9-15-21 Wall Walks, 10-30-60-90-150-210 Double-Unders",
  },
  {
    name: "OPEN 20.5",
    time: "20 minutes",
    rounds: 1,
    wod: "40 Ring Muscle-Ups, 80 calorie Row, 120 Wall Ball Shots",
  },
  {
    name: "OPEN 20.4",
    time: "20 minutes",
    rounds: 1,
    wod: "30 Box Jumps, 15 Clean-and-Jerks, 30 Box Jumps, 15 Clean-and-Jerks, 30 Box Jumps, 10 Clean-and-Jerks, 30 Single-Leg Squats, 10 Clean-and-Jerks, 30 Single-Leg Squats, 5 Clean-and-Jerks, 30 Single-Leg Squats, 5 Clean-and-Jerks",
  },
  {
    name: "OPEN 20.3",
    time: "9 minutes",
    rounds: 1,
    wod: "21-15-9 Deadlifts, Handstand Push-Ups, 21-15-9 Deadlifts, 50 foot Handstand Walk",
  },
  {
    name: "OPEN 20.2",
    time: "20 minutes",
    rounds: 10,
    wod: "4 Dumbbell Thrusters, 6 Toes-to-Bar, 24 Double-Unders",
  },
  {
    name: "open 20.1",
    time: "15 minutes",
    rounds: 10,
    wod: "8 Ground-to-Overheads, 10 Bar Facing Burpees",
  },
  {
    name: "open 19.5",
    time: "20 minutes",
    rounds: 1,
    wod: "33-27-21-15-9 Thrusters (95/65 lb), Chest-to-Bar Pull-Ups",
  },

  {
    name: "open 19.4",
    time: "12 minutes",
    rounds: 3,
    wod: "10 Snatches, 12 Bar-Facing Burpees, 3 minutes Rest, 10 Bar Muscle-Ups, 12 Bar-Facing Burpees",
  },
  {
    name: "open 19.3",
    time: "10 minutes",
    rounds: 1,
    wod: "200 foot Dumbbell Overhead Lunges, 50 Dumbbell Box Step-Ups, 50 Strict Handstand Push-Ups, 200 foot Handstand Walk",
  },
  {
    name: "open 19.2",
    time: "20 minutes",
    rounds: 1,
    wod: " Beginning on an 8-minute clock, complete as many reps as possible of: 25 Toes-to-Bars, 50 Double-Unders, 15 Squat Cleans, 25 Toes-to-Bars, 50 Double-Unders, 13 Squat cleans. If completed before 8 minutes, add 4 minutes to the clock and proceed to: 25 Toes-to-Bars, 50 Double-Unders, 11 Squat Cleans. If completed before 12 minutes, add 4 minutes to the clock and proceed to: 25 Toes-to-Bars, 50 Double-Unders, 9 Squat Cleans. If completed before 16 minutes, add 4 minutes to the clock and proceed to: 25 Toes-to-Bars, 50 Double-Unders, 7 Squat Cleans",
  },
  {
    name: "open 19.1",
    time: "15 minutes",
    rounds: 10,
    wod: "19 Wall Ball, 19 calorie Row",
  },
  {
      name: "OPEN 18.5",
      time: "7 minutes",
      rounds: 9,
      wod: "3 Thrusters, 3 Chest-to-Bar Pull-Ups, 6 Thrusters, 6 Chest-to-Bar Pull-Ups, 9 Thrusters, 9 Chest-to-Bar Pull-Ups"
  },
  {
    name: "OPEN 18.4",
    time: "9 minutes",
    rounds: 1,
    wod: "21-15-9 Reps of: Deadlift, Handstand Push-Ups. Then, 21-15-9 Reps of: Deadlift, 50 ft Handstand Walk"
},
{
    name: "OPEN 18.3",
    time: "14 minutes",
    rounds: 2,
    wod: "100 Double-Unders, 20 Overhead Squats, 100 Double-Unders, 12 Ring Muscle-Ups, 100 Double-Unders, 20 Dumbbell Snatches, 100 Double-Unders, 12 Bar Muscle-Ups"
},
{
    name: "OPEN 18.2 & 18.2 A",
    time: "12 minutes",
    rounds: 1,
    wod: " 1-2-3-4-5-6-7-8-9-10 Reps of: Dumbbell Squats, Bar-Facing Burpees. Then, 1 rep max Clean"
},
{
    name: "OPEN 18.1",
    time: "20 minutes",
    rounds: 10,
    wod: " 8 Toes-to-Bars, 10 Dumbbell Hang Clean-and-Jerks, 14/12 calorie Row"
},
{
    name:"OPEN 17.5",
    time: "15 minutes",
    rounds: 10,
    wod: "9 Thrusters, 35 Double-Unders"
},
{
    name:"OPEN 17.4",
    time: "13 minutes",
    rounds: 2,
    wod: "55 Deadlifts, 5 Wall Balls, 55 calories, 55 Handstand Push-Ups"
},
{
    name: "OPEN 17.3",
    time: "24 minutes",
    rounds: 3,
    wod: "Prior to 8 minutes, 3 rounds of: 6 Chest-to-Bar Pull-Ups, 6 Squat Snatches. Then 3 rounds of: 7 Chest-to-Bar Pull-Ups, 5 Squat Snatches. Prior to 12 minutes, 3 rounds of: 8 Chest-to-Bar Pull-Ups, 4 Squat Snatches. Prior to 16 minutes, 3 rounds of: 9 Chest-to-Bar Pull-Ups, 3 Squat Snatches. Prior to 20 minutes, 3 rounds of: 10 Chest-to-Bar Pull-Ups, 2 Squat Snatches. Then, 11 Chest-to-Bar Pull-Ups, 1 Squat Snatch (265/185 lb)"
},
{
    name: "OPEN 17.2",
    time: "12 minutes",
    rounds: 2,
    wod: "50 ft Dumbbell Walking Lunges, 16 Toe-to-Bars, 8 Dumbbell Power Cleans. Then, 2 Rounds of: 50 ft Dumbbell Walking Lunges, 16 Bar Muscle-Ups, 8 Dumbbell Power Cleans"
},
{
    name: "OPEN 17.1",
    time: "20 minutes",
    rounds: 1,
    wod: "10 Dumbbell Snatches (50/35 lb), 15 Burpee Box Jump Overs, 20 Dumbbell Snatches, 15 Burpee Box Jump Overs, 30 Dumbbell Snatches, 15 Burpee Box Jump Overs, 40 Dumbbell Snatches, 15 Burpee Box Jump Overs, 50 Dumbbell Snatches, 15 Burpee Box Jump Overs"
},
{
    name: // OPEN 16.5
    // 2016 CrossFit Games Open WOD
    // 21-18-15-12-9-6-3 Reps For Time
    // Thrusters (95/65 lb)
    // Bar Facing Burpees
    time:
    rounds:
    wod:
},
{
    name: // OPEN 16.4
    // 2016 CrossFit Games Open WOD
    // AMRAP in 13 minutes
    // 55 Deadlifts (225/155 lb)
    // 55 Wall Ball Shots (20/14 lb)
    // 55 calorie Row
    // 55 Handstand Push-Ups
    time:
    rounds:
    wod:
},
{
    name: // OPEN 16.3
    // 2016 CrossFit Games Open WOD
    // AMRAP in 7 minutes
    // 10 Power Snatches (75/55 lb)
    // 3 Bar Muscle-Ups
    time:
    rounds:
    wod:
},
{
    name: // OPEN 16.2
    // 2016 CrossFit Games Open WOD
    // AMRAP in 20 minutes
    // Continue until 4 minutes:
    // 25 Toes-to-Bars
    // 50 Double-Unders
    // 15 Squat Cleans (135/85 lb)
    // If completed before 4 minutes, continue until 8 minutes:
    // 25 Toes-to-Bars
    // 50 Double-Unders
    // 13 Squat Cleans (185/115 lb)
    // If completed before 8 minutes, continue until 12 minutes:
    // 25 Toes-to-Bars
    // 50 Double-Unders
    // 11 Squat Cleans (225/145 lb)
    // If completed before 12 minutes, continue until 16 minutes:
    // 25 Toes-to-Bars
    // 50 Double-Unders
    // 9 Squat Cleans (275/175 lb)
    // If completed before 16 minutes, continue until 20 minutes:
    // 25 Toes-to-Bars
    // 50 Double-Unders
    // 7 Squat Cleans (315/205 lb)
    time:
    rounds:
    wod:
},
{
    name: // OPEN 16.1
    // 2016 CrossFit Games Open WOD
    // AMRAP in 20 minutes
    // 25 foot Overhead Walking Lunges (95/65 lb)
    // 8 Bar Facing Burpees
    // 25 foot Overhead Walking Lunges (95/65 lb)
    // 8 Chest-to-Bar Pull-Ups
    time:
    rounds:
    wod:
},
{
    name: // OPEN 15.5
    // 2015 CrossFit Games Open WOD
    // 27-21-15-9 Reps for Time
    // Row (calories)
    // Thrusters (95/65 lb)
    time:
    rounds:
    wod:
},
{
    name:"OPEN 15.4"
    // 2015 CrossFit Games Open WOD
    // AMRAP in 8 minutes
    // 3 Handstand Push-Ups
    // 3 Cleans (185/125 lb)
    // 6 Handstand Push-Ups
    // 3 Cleans (185/125 lb)
    // 9 Handstand Push-Ups
    // 3 Cleans (185/125 lb)
    // 12 Handstand Push-Ups
    // 6 Cleans (185/125 lb)
    // 15 Handstand Push-Ups
    // 6 Cleans (185/125 lb)
    // 18 Handstand Push-Ups
    // 6 Cleans (185/125 lb)
    // 21 Handstand Push-Ups
    // 9 Cleans (185/125 lb)
    // Etc., following same pattern until time is up
    time:
    rounds:
    wod:
},
{
    name: // OPEN 15.3
    // 2015 CrossFit Games Open WOD
    // AMRAP in 14 minutes
    // 7 Muscle-Ups
    // 50 Wall Ball Shots (20/14 lb)
    // 100 Double-Unders
    time:
    rounds:
    wod:
},
{
    name: // OPEN 15.2
    // 2015 CrossFit Games Open WOD
    // For As Long As Possible
    // From 0:00-3:00, 2 rounds of:
    // 10 Overhead Squats (95/65 lb)
    // 10 Chest-to-Bar Pull-Ups
    
    // From 3:00-6:00, 2 rounds of:
    // 12 Overhead Squats (95/65 lb)
    // 12 Chest-to-Bar Pull-Ups
    
    // From 6:00-9:00, 2 rounds of:
    // 14 Overhead Squats (95/65 lb)
    // 14 Chest-to-Bar Pull-Ups
    time:
    rounds:
    wod:
},
{
    name: "OPEN 15.1 & 15.1A"
    // 2015 CrossFit Games Open WOD
    // Two Parts in 15 minutes
    // (15.1) AMRAP in 9 minutes
    // 15 Toes-to-Bars
    // 10 Deadlifts (115/75 lb)
    // 5 Snatches (115/75 lb)
    // Then ("15.1A"), from 9:00-15:00
    // 1-Rep-Max Clean-and-Jerk
    time:
    rounds:
    wod:
},
{
    name: // OPEN 14.5
    // 2014 CrossFit Games Open WOD
    // 21-18-15-12-9-6-3 Reps, For Time
    // Thrusters (95/65 lb)
    // Bar Facing Burpees
    time:
    rounds:
    wod:
},
{
    name: // OPEN 14.4
    // 2014 CrossFit Games Open WOD
    // AMRAP in 14 minutes
    // 60 calorie Row
    // 50 Toes-to-Bars
    // 40 Wall Ball Shots (20/14 lb, 10/9 ft)
    // 30 Cleans (135 lb)
    // 20 Muscle-Ups
    time:
    rounds:
    wod:
},
{
    name: // OPEN 14.3
    // 2014 CrossFit Games Open WOD
    // AMRAP in 8 minutes
    // 10 Deadlifts (135/95 lb)
    // 15 Box Jumps (24/20 in)
    // 15 Deadlifts (185/135 lb)
    // 15 Box Jumps (24/20 in)
    // 20 Deadlifts (225/155 lb)
    // 15 Box Jumps (24/20 in)
    // 25 Deadlifts (275/185 lb)
    // 15 Box Jumps (24/20 in)
    // 30 Deadlifts (315/205 lb)
    // 15 Box Jumps (24/20 in)
    // 35 Deadlifts (365/225 lb)
    // 15 Box Jumps (24/20 in)
    // To-Do
    time:
    rounds:
    wod:
},
{
    name: // OPEN 14.2
    // 2014 CrossFit Games Open WOD
    // For As Long As Possible
    // From 0:00-3:00, 2 rounds of:
    // 10 Overhead Squats (95/65 lb)
    // 10 Chest-to-Bar Pull-Ups
    // From 3:00-6:00, 2 rounds of:
    // 12 Overhead Squats (95/65 lb)
    // 12 Chest-to-Bar Pull-Ups
    // From 6:00-9:00, 2 rounds of:
    // 14 Overhead Squats (95/65 lb)
    // 14 Chest-to-Bar Pull-Ups
    // Follow the pattern until you fail to complete both rounds.
    time:
    rounds:
    wod:
},
{
    name: // OPEN 14.1
    // 2014 CrossFit Games Open WOD
    // AMRAP in 10 minutes
    // 30 Double-Unders
    // 15 Power Snatches (75/55 lb)
    time:
    rounds:
    wod:
},
{
    name: // OPEN 12.3
    // 2012 CrossFit Games Open WOD
    // AMRAP in 18 minutes
    // 15 Box Jumps (24/20 in)
    // 12 Push Presses (115/75 lb)
    // 9 Toes-to-Bars
    time:
    rounds:
    wod:
},
{
    name: // OPEN 12.4
    // 2012 CrossFit Games Open WOD
    // AMRAP in 12 minutes
    // 150 Wall Ball Shots (20/14 lb)
    // 90 Double-Unders
    // 30 Muscle-Ups
    time:
    rounds:
    wod:
},
{
    name: // OPEN 12.5
    // 2012 CrossFit Games Open WOD
    // AMRAP in 7 minutes
    // 3 Thrusters (100/65 lb)
    // 3 Chest-to-Bar Pull-Ups
    // 6 Thrusters (100/65 lb)
    // 6 Chest-to-Bar Pull-Ups
    // 9 Thrusters (100/65 lb)
    // 9 Chest-to-Bar Pull-Ups
    // If you complete the round of 9, complete a round of 12, then go on to 15, etc.
    time:
    rounds:
    wod:
},
{   name:// OPEN 13.1
// 2013 CrossFit Games Open WOD
// AMRAP in 17 minutes
// 40 Burpees
// 30 Snatches (75/45 lb)
// 30 Burpees
// 30 Snatches (135/75 lb)
// 20 Burpees
// 30 Snatches (165/100 lb)
// 10 Burpees
// Max Snatches (210/120 lb)
    time:
    rounds:
    wod:
},
{   name: // OPEN 13.2
// 2013 CrossFit Games Open WOD
// AMRAP in 10 minutes
// 5 Shoulder-to-Overheads (115/75 lb)
// 10 Deadlifts (115/75 lb)
// 15 Box Jumps (24/20 in)
    time:
    rounds:
    wod:
},
{   name: // OPEN 13.3
// 2013 CrossFit Games Open WOD
// AMRAP in 12 minutes
// 150 Wall Balls (20/14 lb)
// 90 Double-Unders
// 30 Muscle-Ups
    time:
    rounds:
    wod:
},
{   name: // OPEN 13.4
// 2013 CrossFit Games Open WOD
// AMRAP in 7 minutes
// 3 Clean-and-Jerks (135/95 lb)
// 3 Toes-to-Bars
// 6 Clean-and-Jerks (135/95 lb)
// 6 Toes-to-Bars
// 9 Clean-and-Jerks (135/95 lb)
// 9 Toes-to-Bars
// 12 Clean-and-Jerks (135/95 lb)
// 12 Toes-to-Bars
// If athlete completes the round of 12, go on to 15. Complete 15, go on the 18, etc.
    time:
    rounds:
    wod:
},
{   name: // OPEN 13.5
// 2013 CrossFit Games Open WOD
// AMRAP For As Long As Possible
// 15 Thrusters (100/65 lb)
// 15 Chest-to-Bar Pull-Ups
// If 90 reps (3 rounds) are completed in under 4 minutes, time extends to 8 minutes.
// If 180 reps (6 rounds) are completed in under 8 minutes, time extends to 12 minutes. Etc.
    time:
    rounds:
    wod:
},
{   name: // OPEN 12.1
// 2012 CrossFit Games Open WOD
// AMRAP in 7 minutes
// Burpees
    time:
    rounds:
    wod:
},
{   name: // OPEN 12.2
// 2012 CrossFit Games Open WOD
// AMRAP in 10 minutes
// 30 Snatches (75/45 lb)
// 30 Snatches (135/75 lb)
// 30 Snatches (165/100 lb)
// Max Snatches (210/120 lb)
    time:
    rounds:
    wod:
},
{   name: // OPEN 11.1
// 2011 CrossFit Games Open WOD
// AMRAP in 10 minutes
// 30 Double-Unders
// 15 Power Snatches (75/55 lb)
    time:
    rounds:
    wod:
},
{   name: // OPEN 11.2
// 2011 CrossFit Games Open WOD
// AMRAP in 15 minutes
// 9 Deadlifts (155/100 lb)
// 12 Push-Ups
// 15 Box Jumps (24/20 in)
    time:
    rounds:
    wod:
},
{   name: // OPEN 11.3
// 2011 CrossFit Games Open WOD
// AMRAP in 5 minutes
// 1 Squat Clean (165/110 lb)
// 1 Jerk (165/110 lb)
    time:
    rounds:
    wod:
},
{   name: // OPEN 11.4
// 2011 CrossFit Games Open WOD
// AMRAP in 10 minutes
// 60 Bar Facing Burpees
// 30 Overhead Squats (120/90 lb)
// 10 Muscle-Ups
    time:
    rounds:
    wod:
},
{   name: // OPEN 11.5
// 2011 CrossFit Games Open WOD
// AMRAP in 20 minutes
// 5 Power Cleans (145/105 lb)
// 10 Toes-To-Bars
// 15 Wall Balls Shots (20/14 lb, 10/9 ft)
    time:
    rounds:
    wod:
},
{   name: "OPEN 11.6",
    time: "7 minutes",
    rounds: 3,
    wod: "3 Thrusters, 3 Chest-to-Bar Pull-Ups, 6 Thrusters, 6 Chest-to-Bar Pull-Ups, 9 Thrusters, 9 Chest-to-Bar Pull-Ups"
}
];
console.log(workoutOfTheDay);





