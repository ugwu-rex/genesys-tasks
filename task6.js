const interns = [
    { name: "Rex", scores: [10, 10, 0, 10, 10] },
    { name: "John", scores: [10, 10, 10, 10, 10] },
    { name: "Jane", scores: [0, 4, 9, 7, 10] },
    { name: "Henry", scores: [8, 6, 7, 5, 9] },
    { name: "Mary", scores: [8, 9, 8, 7, 10] }
];

interns.forEach(intern => {
    let total = 0;
    for (let i = 0; i < intern.scores.length; i++) {
        total += intern.scores[i];
    }
    let average = total / intern.scores.length;
    console.log(intern.name + "'s",  " average score is " + average.toFixed(2));;
});