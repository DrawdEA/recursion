function fibs(num) {
    let numbers = [];
    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < num; i++) {
        if (i == 0) { 
            numbers[i] = num1 
        } else if (i == 1) { 
            numbers[i] = num2 
        } else {
            numbers[i] = num1 + num2;
            num1 = num2;
            num2 = numbers[i];
        }
    }

    return numbers;
}

function fibsRec(num) {
    if (num < 2) {
        return num;
    } else {
        return (fibsRec(num - 1) + fibsRec(num - 2));
    }
}

function mergeSort(arr) {
    // Base case: return the array if the length is 0 or 1.
    if (arr.length == 1 || arr.length == 0) { return arr };
    
    // Do the recursive on the divided arrays.
    let middle = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, middle));
    let arr2 = mergeSort(arr.slice(middle));

    // Merge the 2 arrays.
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let a = 0, b = 0;
    let mergedArr = [];
    do {
        // Break the do-while loop if there are no more on either side.
        if (arr1.length == 0 || arr2.length == 0) break;
        if (arr1[0] < arr2[0]) {
            mergedArr.push(arr1.shift());
            b++;
        } else {
            mergedArr.push(arr2.shift());
            a++;
        }
    } while (a <= arr1Length && b <= arr2Length);

    // Return the merged array along with the remaining values in the divided arrays.
    return mergedArr.concat(arr1).concat(arr2);
}

console.log(fibs(10));
console.log(fibsRec(10));
console.log(mergeSort([11, 3, 2, 1, 5, 7, 8, 6, 4, 10, -1, 2, 500]));