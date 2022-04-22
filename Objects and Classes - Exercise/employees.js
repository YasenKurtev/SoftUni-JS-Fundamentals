function employees(arr) {

    let infoArr = [];

    class Person {
        constructor(fullName, number) {
            this.fullName = fullName;
            this.number = number;
        };

        print() {
            console.log(`Name: ${this.fullName} -- Personal Number: ${this.number}`);
        }
    }

    for (el of arr) {
        let personalNumber = el.length;
        let person = new Person(el, personalNumber);
        infoArr.push(person);
    }

    for (el of infoArr) {
        el.print(el[Hero]);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])