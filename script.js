// need a function that returns the average

function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3)/ 3
}
// need a function to assign the grade

function assignGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }}

// get the user input, prompt

const scores = [];
for (let i = 0; i < 3; i++) {
    const score = prompt(`Enter Score ${i + 1}:`);
    scores.push(parseInt(score));
}

const average = calculateAverage(...scores);
const grade = assignGrade(average);

// display the results, console.log
console.log(`Average Grade: ${average}`);
console.log(`Final Grade: ${grade}`);