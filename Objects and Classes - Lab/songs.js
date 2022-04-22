function songs(arr) {

    let songsCount = Number(arr.shift());
    let typeSong = arr.pop();
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < songsCount; i++) {
        let command = arr[i].split('_');
        let song = new Song(command[0], command[1], command[2]);
        songs.push(song);
    }

    /*    if (typeSong === "all") {
            for (let song of songs) {
                console.log(song[this.name]);
            }
        } else {
            for (let song of songs) {
                if (song.typeList === typeSong) {
                    console.log(song.name);
                }
            }
        }
    */

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])