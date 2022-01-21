// 가장 작은 수 찾기

function min(arr) {
    let temp = 10;

    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i]) {
            temp = arr[i];
        }
    }

    return temp;
}

console.log(min([4, 3, 2, 1])); // 1
console.log(min([4, 1, 2, 3])); // 1