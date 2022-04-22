function cat(arr) {

    let cats = [];

    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        };

        speak() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let cat = new Cat(catData[0], catData[1]);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.speak();
    }
}

cat(['Mellow 2', 'Tom 5'])