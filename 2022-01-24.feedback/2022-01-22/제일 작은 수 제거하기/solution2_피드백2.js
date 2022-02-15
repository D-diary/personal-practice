// https://programmers.co.kr/learn/courses/30/lessons/12935

// 56.3 제출 실패
function solution(arr) {
    let temp = Number.MAX_SAFE_INTEGER;
    // let temp = Number.MIN_SAFE_INTEGER; // 제일 작은 수

    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i]) {
            temp = arr[i]
        }
    }
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === temp) {
            arr.splice(i, 1);
        }
    }
    // console.log(arr)

    if (arr.length === 0) {
        return [-1];
    } else {
        return arr;
    }
}

// console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
// console.log(solution([10])); // [-1]

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);