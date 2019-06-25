function sortingBiggestSmallest(input) {
    // Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. Print the elements on one row, separated by single space.

    // 1 solve - by sort() method
    // 1)Define empty array for final sorting
    // 2)Dublicate input array and sorting then in descending order
    // 3)for loop throught dublicate sorted array while length of input array
    // 4)Check if index is even or odd
    // 5)Remove items from dublicate array and Add to empty array
    let output = [];
    let inputSorted = input.slice(0).sort((a, b) => b - a); // console.log(inputSorted);
    
    for (let i = 0; i < input.length; i++) {  
        if (i % 2 === 0) {
            let biggest = inputSorted.shift();
            output.push(biggest);
        } else {
            let smallest = inputSorted.pop();
            output.push(smallest);
        }
    }

    console.log(output.join(' '));
    // console.log(input, inputSorted);

    // 2 solve - by Math.min/max + spred operator (...)?
}

sortingBiggestSmallest([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);  // 94 1 69 2 63 3 52 18 31 21
