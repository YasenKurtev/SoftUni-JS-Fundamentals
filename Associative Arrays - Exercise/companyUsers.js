function companyUsers(arr) {

    let companies = {};

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' -> ');
        let name = tokens[0];
        let id = tokens[1];
        if (!companies.hasOwnProperty(name)) {
            companies[name] = [];
            if (!companies[name].includes(id)) {
                companies[name].push(id);
            }
        } else {
            if (!companies[name].includes(id)) {
                companies[name].push(id);
            }
        }
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sorted) {
        console.log(company[0]);
        for (let el of company[1]) {
            console.log(`-- ${el}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])