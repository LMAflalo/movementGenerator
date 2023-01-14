//A factory function for generating workout objects
const workoutGenerator = (muscleGroup, majorLifts, minorLifts) => {
    return {
        muscleGroup: muscleGroup,
        majorLifts: majorLifts,
        minorLifts: minorLifts,
        getRandomMajor() {
            return this.majorLifts[Math.floor(Math.random() * this.majorLifts.length)]
        },
        getRandomMinor() {
            return this.minorLifts[Math.floor(Math.random() * this.minorLifts.length)]
        }
    }
}

//Stores the names of the days of the week
const daysOfTheWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday', 
    7: 'Sunday'
}

//Store the workouts--generated by the factory function--according to the day.
const daysOfProgram = {
    'Monday': workoutGenerator('Chest', ['Bench Press', 'Incline Bench Press', 'Weighted Dips', 'Decline Bench Press'],
    ['Flyes', 'Pullovers', 'Pushups', 'Pushups', 'Tricep Extensions', 'Dumbell Bench Press']),
    'Tuesday': workoutGenerator('Back', ['Weighted Pullups', 'Bent Over Barbell Rows', 'T-Bar Rows', 'Deadlifts'],
    ['Lat Pulldowns', 'Pullups', 'Alternating Curls', 'Hammer Curls']),
    'Wednesday': 'Rest',
    'Thursday': workoutGenerator('Legs', ['Squat', 'Leg Press', 'Front Squat', 'Weighted Lunges'],
    ['Romanian Deadlifts', 'Leg Extensions', 'Leg Curls', 'Calf Raises']),
    'Friday': workoutGenerator('Shoulders', ['Pike Press', 'Shoulder Press', 'Arnold Press', 'Dumbell Shoulder Press'], 
    ['Lateral Raises', 'Band Shoulder Work', 'Cable Shoulder Press', 'Reverse Flyes']),
    'Saturday': 'Rest',
    'Sunday': 'Rest'
}

//Store the set/rep protocols in variables for easier interpolation later
const repScheme = {
    1: '3 sets of 5 reps',
    2: '4 sets of 8 reps',
    3: '3 sets of 12 reps'
}

//Randomly determine the day
let day = daysOfTheWeek[Math.ceil(Math.random() * 7)];

//Create workout variable for easier access later.
let todaysWorkout = daysOfProgram[day];

//Create empty objects as containers for the randomized workouts that will occur on that day.
let majorLifts = {

}
let minorLifts = {
    
}

//Print Day
console.log(`\nGood Morning! It's ${day}!`);

//If rest day, print rest message.
//If a workout day, generate random major and minor exercises, ensuring no duplicates, then print message using interpolation.
if (todaysWorkout === 'Rest') {
    console.log('Today is a rest day. Take the day off, and try not to work too hard. Let your body rebuild and come back stronger!\n\n');
} else {
    majorLifts[1] = todaysWorkout.getRandomMajor();
    do {
        majorLifts[2] = todaysWorkout.getRandomMajor();
    } while (majorLifts[1] === majorLifts[2]);

    minorLifts[1] = todaysWorkout.getRandomMinor();
    do {
        minorLifts[2] = todaysWorkout.getRandomMinor();
    } while (minorLifts[1] === minorLifts[2]);
    console.log(`Today is ${todaysWorkout.muscleGroup} day! Today you will perform:\n\n\t${repScheme[1]} of ${majorLifts[1]}\n\t${repScheme[2]} of ${majorLifts[2]}\n\t${repScheme[3]} of ${minorLifts[1]}\n\t${repScheme[3]} of ${minorLifts[2]}\n\n`);
};