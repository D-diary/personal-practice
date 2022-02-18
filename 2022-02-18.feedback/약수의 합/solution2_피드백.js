// https://programmers.co.kr/learn/courses/30/lessons/12928

function getDivisor(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function solution(n) {
    const arr = getDivisor(n);
    const answer = getSum(arr);

    return [answer, arr];
}

console.log(solution(12)); // 28
console.log(solution(5)); // 6