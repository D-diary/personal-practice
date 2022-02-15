// https://programmers.co.kr/learn/courses/30/lessons/12935

// 56.3 제출 실패
function solution(arg) {
    let temp = 10;
    let arr = [];

    for (let i = 0; i < arg.length; i++) {
        arr.push(arg[i])
        if (temp > arg[i]) {
            temp = arg[i]
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

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]