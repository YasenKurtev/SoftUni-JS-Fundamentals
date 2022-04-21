function sortAnArrayBy2Criteria(arr) {

    function sort(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
    arr.sort(sort);
    console.log(arr.join('\n'));
}

sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'])