let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
            console.log(`Comparison: ${arr[i]} > ${arr[i + 1]}?`, arr); //Added logging as requested.
        }
    } while (swapped);
    return arr;
}

let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);