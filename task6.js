const intern = [
    {
        name: "Rex",
        taskScores: [10,10,0,10,10]

    },
    {
        name: "John",
        taskScores: [10,10,10,10,10]
    },
    {
        name: "Jane",
        taskScores: [0,4,9,7,10]
    },
    {
        name: "Henry",
        taskScores: [8,6,7,5,9]
    },
    {
        name: "Mary",
        taskScores: [8,9,8,7,10]
    }
];
function calculateAverageScores(interns) {
    if (taskScores.length === 0) 
        return 0;
    let sum = taskScores.reduce((total, score) => total + score, 0);
    return (sum / taskScores.length).toFixed(2);
}

intern.forEach(intern => {
    const averageScore = calculateAverageScores(intern.taskScores);
    console.log(`Intern: ${intern.name}, Average Score: ${averageScore}`);
});
