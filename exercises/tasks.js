function lessThan(num, num2) {
    return num < num2;
}

function evenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] % 2 === 0) {
            return true;
        }
    }
}

// const arr = [1, 2, 3]
// console.log(arr[2])
console.log(evenNumbers([1, 3, 5, 6 ]))