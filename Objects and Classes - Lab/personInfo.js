function personInfo(firstName, lastName, age) {

    let obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
    console.log(obj);
    return obj;
}

personInfo("Peter",
    "Pan",
    "20")