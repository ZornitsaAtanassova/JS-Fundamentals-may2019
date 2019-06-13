function commonElements(firstArray, secondArray) {
    // Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.
    
    // 1)Iterate through 1st array
    // 2)Define 1st-array-elements variable with index
    // 3)Iterate through 2nd array
    // 4)Define 2nd-array-elements variable with index
    // 5)Verify whether element from 1st array is equal elements from 2nd array 
    // 6)If TRUE - print element.

    for (let i = 0; i < firstArray.length; i++) {
        let firstArrElement = firstArray[i];

        for (let j = 0; j < secondArray.length; j++) {
            let secondArrElement = secondArray[j];

            if (firstArrElement === secondArrElement) {
                console.log(firstArrElement);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']
);   // hello 4
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']
);   // o i
