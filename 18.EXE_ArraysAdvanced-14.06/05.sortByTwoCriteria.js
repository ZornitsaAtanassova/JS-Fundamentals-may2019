function sortByTwoCriteria(input) {
    // Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive. The input comes as array of strings. The output is the ordered array of strings.

    let sorted = input.sort(sortNames);
    console.log(sorted.join('\n'));

    function sortNames(a, b) {
        let firstCriteria = a.length - b.length;

        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }

        return firstCriteria;
    }
}

sortByTwoCriteria(["alpha", "beta", "gamma"]);    // beta alpha gamma
console.log(`-------------------------------`);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);    // Jack Isacc George Theodor Harrison
