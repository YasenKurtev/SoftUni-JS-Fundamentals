function schoolRegister(arr) {

    let registry = {};

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(', ');
        let name = tokens[0].split(': ')[1];
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let score = tokens[2].split(': ')[1];
        if (!registry.hasOwnProperty(grade)) {
            if (score >= 3) {
                registry[grade] = {};
                registry[grade].Students = [];
                registry[grade].Score = 0;
                registry[grade].Students.push(name);
                registry[grade].Score += Number(score);
                registry[grade].Students.push(name);
        } else {
            if (score >= 3) {
                registry[grade].Students.push(name);
                registry[grade].Score += Number(score);
            }
        }
    }

    for (let key of Object.entries(registry)) {
        console.log(`${key[0]} Grade`);
        let names = Object.values(key[1])[0].join(', ');
        let averageGrade = Number(Object.values(key[1])[1]) / Object.values(key[1])[0].length;
        console.log(`List of students: ${names}`);
        console.log(`Average annual grade from last year: ${averageGrade.toFixed(2)}`);
        console.log('');
    }
}


schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])