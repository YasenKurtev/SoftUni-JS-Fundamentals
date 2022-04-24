function bookShelf(arr) {

    let shelfs = {};
    let genres = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("->")) {
            let tokens = arr[i].split(' -> ');
            let id = tokens[0];
            let genre = tokens[1];
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = [genre];
                genres.push(genre);
                genres.push(id)
            }
        } else if (arr[i].includes(':')) {
            let tokens = arr[i].split(', ');
            let book = tokens[0];
            let genre = tokens[1];
            if (genres.includes(genre)) {
                let id = genres[genres.indexOf(genre) + 1];
                shelfs[id].push(book);
            }
        }
    }

    let sortedShelfs = Object.entries(shelfs).sort(([keyA, valueA], [keyB, valueB]) => shelfs[keyB].length - shelfs[keyA].length);

    for (let el of sortedShelfs) {
        let id = el.shift();
        let shelf = el.shift();
        let genre = shelf.shift();
        let numberOfBooks = shelf.length;
        shelf.sort((a, b) => a.localeCompare[b]);
        console.log(`${id} ${genre}: ${numberOfBooks}`);
        for (let book of shelf) {
            console.log(`--> ${book}`);
        }
    }
}

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
)