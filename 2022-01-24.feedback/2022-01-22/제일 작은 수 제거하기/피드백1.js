
function solution(arr) {
    let min = 1000;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (min !== arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log(result);

    if (result.length === 0) {
        result.push(-1);
    }

    return result;
}

// console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]