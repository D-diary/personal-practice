// 셔플 함수를 만드시오.

function random(end) {
    return Math.floor(Math.random() * end);
}

function solution(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const r = random(arr.length);
        // console.log('r', r);
        result.push(arr.splice(r, 1)[0]);
        // result.push(arr[random(arr.length)]);
        // console.log(i);
    }

    return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [3, 2, 1, 4, 5] 결과는 실행마다 달라질 수 있음.
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));