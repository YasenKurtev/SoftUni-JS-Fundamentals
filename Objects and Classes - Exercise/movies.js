function movies(arr) {

    let moviesArr = [];

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        if (line.includes("addMovie")) {
            let movieSplit = arr[i].split('addMovie ');
            moviesArr.push({ name: movieSplit[1] });
        } else if (line.includes("directedBy")) {
            let directedSplit = arr[i].split('directedBy ');
            let name = directedSplit[0].trim();
            let director = directedSplit[1];
            let movie = moviesArr.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            let dateSplit = arr[i].split('onDate ');
            let name = dateSplit[0].trim();
            let date = dateSplit[1];
            let movie = moviesArr.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (el of moviesArr) {
        if (el.hasOwnProperty('director') && el.hasOwnProperty('name') && el.hasOwnProperty('date')) {
            console.log(JSON.stringify(el));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])