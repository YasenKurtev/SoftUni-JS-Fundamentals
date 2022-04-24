function softUniStudents(arr) {

    let courses = {};
    let places = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(":")) {
            let tokens = arr[i].split(': ');
            let courseName = tokens[0];
            let capacity = tokens[1];
            if (!places.includes(courseName)) {
                courses[courseName] = {};
                places.push(courseName);
                places.push(Number(capacity));
            } else if (places.includes(courseName)) {
                places[places.indexOf(courseName) + 1] += Number(capacity);
            }
        } else if (arr[i].includes("@")) {
            let replaced1 = arr[i].split('[');
            let user = replaced1.shift();
            let replaced2 = replaced1[0].split(']');
            let credits = replaced2.shift();
            let replaced3 = replaced2[0].split(' ');
            let email = replaced3[3];
            let courseName = replaced3[5];
            if (places[places.indexOf(courseName) + 1] !== 0) {
                if (courses.hasOwnProperty(courseName)) {
                    courses[courseName][credits] = `${user}, ${email}`;
                    places[places.indexOf(courseName) + 1] -= 1;
                }
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort(([keyA, valueA], [keyB, valueB]) => Object.keys(courses[keyB]).length - Object.keys(courses[keyA]).length);

    for (let course of sortedCourses) {
        let name = course[0];
        let placesLeft = places[places.indexOf(name) + 1];
        let students = course[1];
        console.log(`${name}: ${placesLeft} places left`);
        let sortedStudents = Object.entries(students).sort(([keyA, valueA], [keyB, valueB]) => keyB - keyA);
        for (let student of sortedStudents) {
            let credits = student[0];
            let name = student[1];
            console.log(`--- ${credits}: ${name}`);
        }
    }
}

softUniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
)